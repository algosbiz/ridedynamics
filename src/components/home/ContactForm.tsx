"use client";

import { useState, type FormEvent } from "react";
import { contactInfo } from "@/data/contact";

export default function ContactForm() {
  const [prepared, setPrepared] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();
    const subject = encodeURIComponent(`Ride Dynamics enquiry — ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    );
    window.location.href = `mailto:${contactInfo.emails[0]}?subject=${subject}&body=${body}`;
    setPrepared(true);
  }
  return (
    <form className="contact__form" onSubmit={submit}>
      <p className="m-text-2">
        Contact Ride Dynamics, motorcycle suspension and brake specialist.
      </p>
      <label className="m-field">
        <span className="m-field__label">Your name</span>
        <input
          className="m-field__input"
          name="name"
          autoComplete="name"
          required
          maxLength={120}
        />
      </label>
      <label className="m-field">
        <span className="m-field__label">Email</span>
        <input
          className="m-field__input"
          name="email"
          type="email"
          autoComplete="email"
          required
          maxLength={254}
        />
      </label>
      <label className="m-field contact__wide">
        <span className="m-field__label">Your enquiry</span>
        <textarea
          className="m-field__input"
          name="message"
          rows={5}
          required
          maxLength={5000}
        />
      </label>
      <button className="m-btn" type="submit">
        <span className="m-btn__label">Enquire now</span>
      </button>
      <p className="contact__wide rd-form-note" role="status">
        {prepared
          ? "Your email draft is ready in your email app. Send it there to complete your enquiry."
          : "Opens your email app with your enquiry filled in."}
      </p>
    </form>
  );
}
