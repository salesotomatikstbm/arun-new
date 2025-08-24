import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Send,
} from "lucide-react";
import { FaPinterest } from "react-icons/fa"; // ✅ Pinterest icon
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Subject: "",
    Message: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.Name.trim()) {
      newErrors.Name = "Name is required";
    } else if (!/^[A-Za-z\s]+$/.test(formData.Name.trim())) {
      newErrors.Name = "Name must contain only letters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.Email.trim()) {
      newErrors.Email = "Email is required";
    } else if (!emailRegex.test(formData.Email)) {
      newErrors.Email = "Enter a valid email";
    }

    if (!formData.Phone.trim()) {
      newErrors.Phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.Phone)) {
      newErrors.Phone = "Enter a valid 10-digit phone number";
    }

    if (!formData.Subject.trim()) {
      newErrors.Subject = "Subject is required";
    }

    if (!formData.Message.trim()) {
      newErrors.Message = "Message is required";
    } else if (formData.Message.length < 10) {
      newErrors.Message = "Message must be at least 10 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbw3im1xywKNUwy34ZiXFahLrKHyGn2ZMulzaDh0uNKHD5APawV9WH25TLz7aorrM5FklQ/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });

      setFormData({
        Name: "",
        Email: "",
        Phone: "",
        Subject: "",
        Message: "",
      });
    } catch (error) {
      console.error("Contact form error:", error);
      toast({
        title: "Something went wrong!",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:arungwork63@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    arungwork63@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+916383791772"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 63837 91772
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h3 className="text-2xl font-semibold mb-6">Connect With Me</h3>

              <div className="flex space-x-4 justify-start">
                <a
                  href="https://www.linkedin.com/in/arun-g-8422a3240/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5 hover:text-primary" />
                </a>
                <a
                  href="https://www.instagram.com/arun_g_it/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-5 w-5 hover:text-primary" />
                </a>
                <a
                  href="https://github.com/arungovindhasamygithub?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5 hover:text-primary" />
                </a>
                <a
                  href="https://in.pinterest.com/arungwork63/icons"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaPinterest className="h-5 w-5 hover:text-primary" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-card p-8 rounded-lg shadow-xs space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <div>
              <label htmlFor="Name" className="block text-sm font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="Name"
                name="Name"
                required
                value={formData.Name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Arun G..."
              />
              {errors.Name && (
                <p className="text-red-500 text-sm mt-1">{errors.Name}</p>
              )}
            </div>

            <div>
              <label htmlFor="Email" className="block text-sm font-medium mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="Email"
                name="Email"
                required
                value={formData.Email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="arungwork63@gmail.com"
              />
              {errors.Email && (
                <p className="text-red-500 text-sm mt-1">{errors.Email}</p>
              )}
            </div>

            <div>
              <label htmlFor="Phone" className="block text-sm font-medium mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="Phone"
                name="Phone"
                required
                value={formData.Phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="+91 63837 91772"
              />
              {errors.Phone && (
                <p className="text-red-500 text-sm mt-1">{errors.Phone}</p>
              )}
            </div>

            <div>
              <label htmlFor="Subject" className="block text-sm font-medium mb-2">
                Subject
              </label>
              <input
                type="text"
                id="Subject"
                name="Subject"
                required
                value={formData.Subject}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Regarding a project..."
              />
              {errors.Subject && (
                <p className="text-red-500 text-sm mt-1">{errors.Subject}</p>
              )}
            </div>

            <div>
              <label htmlFor="Message" className="block text-sm font-medium mb-2">
                Your Message
              </label>
              <textarea
                id="Message"
                name="Message"
                required
                value={formData.Message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                placeholder="Hello, I'd like to talk about..."
                rows="4"
              />
              {errors.Message && (
                <p className="text-red-500 text-sm mt-1">{errors.Message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={cn(
                "cosmic-button w-full flex items-center justify-center gap-2"
              )}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
