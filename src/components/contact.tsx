
"use client";

import { useState, type FormEvent } from "react";
import EditorialSection from "./editorial-section";

// Defines the structure of our contact form data.
type ContactForm = {
    name: string;
    email: string;
    message: string;
};

export default function Contact() {
    // Store the values entered by the visitor.
    const [form, setForm] = useState<ContactForm>({
        name: "",
        email: "",
        message: "",
    });

    // Store validation feedback.
    const [error, setError] = useState("");
    const [isValid, setIsValid] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    /**
     * Update any form field.
     *
     * keyof ContactForm ensures that "field"
     * can only be "name", "email", or "message".
     *
     * This avoids repeating the same state update
     * logic for every input.
     */
    function updateField(
        field: keyof ContactForm,
        value: string
    ) {
        setForm((previous) => ({
            ...previous,
            [field]: value,
        }));

        // Clear previous feedback when the form changes.
        setError("");
        setIsValid(false);
    }

    /**
     * Handle form submission.
     *
     * Currently, this function validates the data.
     * It does NOT send an email yet.
     */

    async function handleSubmit(
        event: FormEvent<HTMLFormElement>
    ) {
        event.preventDefault();

        if (isSubmitting) return;

        setError("");
        setIsValid(false);

        // Client-side required field validation.
        if (
            !form.name.trim() ||
            !form.email.trim() ||
            !form.message.trim()
        ) {
            setError("Please fill in all fields.");
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(form.email.trim())) {
            setError("Please enter a valid email address.");
            return;
        }

        // Inform React that a request is starting.
        setIsSubmitting(true);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                },

                body: JSON.stringify({
                    name: form.name.trim(),
                    email: form.email.trim(),
                    message: form.message.trim(),
                }),
            });

            const result: {
                success?: boolean;
                message?: string;
            } = await response.json();

            // A response can be received even if the
            // backend rejected the request.
            if (!response.ok || result.success !== true) {
                setError(
                    result.message ?? "Unable to validate your message."
                );
                return;
            }

            // Backend accepted and validated the data.
            // No email has been delivered yet.
            setIsValid(true);

        } catch {
            // Network errors or unreadable responses.
            setError(
                "Unable to reach the server. Please try again."
            );

        } finally {
            // Runs whether the request succeeds or fails.
            setIsSubmitting(false);
        }
    }


    return (
        <section
            id="contact"
            className="scroll-mt-24 bg-[#F2EDE2] px-6 py-24"
        >
            <div className="mx-auto max-w-7xl">

                {/* Editorial section heading */}
                <EditorialSection
                    label="05 / LET'S CONNECT"
                    secondLabel="CONTACT"
                />

                <div className="grid gap-16 py-16 md:grid-cols-12">

                    {/* LEFT: Introduction */}
                    <div className="md:col-span-6">
                        <h2 className="font-serif text-5xl leading-tight tracking-tight text-[#1B1B19] md:text-7xl">
                            Have something{" "}
                            <em className="font-normal text-[#AD583B]">
                                in mind?
                            </em>
                        </h2>

                        <p className="mt-8 max-w-md text-base leading-8 text-[#6B665E]">
                            I'm interested in meaningful projects,
                            new opportunities, and conversations
                            about software development.
                        </p>

                        <div className="mt-10 h-0.5 w-12 bg-[#AD583B]" />

                        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#AD583B]">
                            Let's build something meaningful.
                        </p>
                    </div>

                    {/* RIGHT: Contact form */}
                    <form
                        onSubmit={handleSubmit}
                        noValidate
                        className="flex flex-col gap-8 md:col-span-6"
                    >

                        {/* NAME */}
                        <div className="flex flex-col gap-3">
                            <label
                                htmlFor="contact-name"
                                className="text-xs font-semibold uppercase tracking-widest text-[#514A40]"
                            >
                                Your Name
                            </label>

                            <input
                                id="contact-name"
                                name="name"
                                type="text"
                                autoComplete="name"
                                required
                                placeholder="John Doe"
                                value={form.name}
                                onChange={(event) =>
                                    updateField("name", event.target.value)
                                }
                                className="w-full border-b border-[#C9C1B4] bg-transparent py-3 text-base text-[#1B1B19] outline-none transition-colors placeholder:text-[#9C9285] focus:border-[#AD583B] focus-visible:ring-2 focus-visible:ring-[#AD583B]/20"
                            />
                        </div>

                        {/* EMAIL */}
                        <div className="flex flex-col gap-3">
                            <label
                                htmlFor="contact-email"
                                className="text-xs font-semibold uppercase tracking-widest text-[#514A40]"
                            >
                                Your Email
                            </label>

                            <input
                                id="contact-email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                placeholder="johndoe@gmail.com"
                                value={form.email}
                                onChange={(event) =>
                                    updateField("email", event.target.value)
                                }
                                className="w-full border-b border-[#C9C1B4] bg-transparent py-3 text-base text-[#1B1B19] outline-none transition-colors placeholder:text-[#9C9285] focus:border-[#AD583B] focus-visible:ring-2 focus-visible:ring-[#AD583B]/20"
                            />
                        </div>

                        {/* MESSAGE */}
                        <div className="flex flex-col gap-3">
                            <label
                                htmlFor="contact-message"
                                className="text-xs font-semibold uppercase tracking-widest text-[#514A40]"
                            >
                                Your Message
                            </label>

                            <textarea
                                id="contact-message"
                                name="message"
                                rows={5}
                                required
                                placeholder="Tell me about your project..."
                                value={form.message}
                                onChange={(event) =>
                                    updateField("message", event.target.value)
                                }
                                className="w-full resize-y border-b border-[#C9C1B4] bg-transparent py-3 text-base text-[#1B1B19] outline-none transition-colors placeholder:text-[#9C9285] focus:border-[#AD583B] focus-visible:ring-2 focus-visible:ring-[#AD583B]/20"
                            />
                        </div>

                        {/* ERROR FEEDBACK */}
                        {error && (
                            <p
                                role="alert"
                                className="text-sm text-red-700"
                            >
                                {error}
                            </p>
                        )}

                        {/* VALIDATION FEEDBACK */}
                        {isValid && (
                            <p role="status" className="text-sm text-[#514A40]">
                                Server validation passed.
                                Email delivery is not configured yet.
                            </p>
                        )}
                        {/* SUBMIT BUTTON */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="group inline-flex w-fit items-center gap-4 bg-[#1B1B19] px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-[#AD583B] disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            {isSubmitting ? "Checking..." : "Check Message"}

                            {!isSubmitting && (
                                <span aria-hidden="true">↗</span>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
