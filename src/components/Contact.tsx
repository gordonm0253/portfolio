import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import snoopyGIF from "@/assets/snoopy.gif";
import { useState } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const nodeID = e.target.id;
    if (nodeID === "firstName") {
      setFirstName(e.target.value);
    } else if (nodeID === "lastName") {
      setLastName(e.target.value);
    } else if (nodeID === "email") {
      setEmail(e.target.value);
    } else {
      setMessage(e.target.value);
    }
  };

  const handleSubmit = () => {
    const isValid = firstName.trim() !== "" && lastName.trim() !== "" &&
                    email.includes("@") && email.includes(".") && email.length >= 5 && message.trim() !== "";
    if (isValid) {
      setLoading(true);
      setError("");
      setSuccess(false);
      emailjs.send(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, {
        name: firstName + " " + lastName, 
        email: email, 
        message: message,
      }, import.meta.env.VITE_EMAILJS_KEY).then(() => {
        setLoading(false);
        setSuccess(true);
        setFirstName("");
        setLastName("");
        setEmail("");
        setMessage("");
      }, (error) => {
        setLoading(false);
        setError("Failed to send message. Please try again.");
        console.log("EmailJS Error:", error.text);
      },);
    } else {
      setError("Please fill out all fields correctly.");
      setSuccess(false);
    }
    
  }

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Contact Me
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="gradient-card border-0 shadow-orange">
            <CardHeader>
              <CardTitle className="text-center text-2xl font-bold text-accent">
                Send Me a Message
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input 
                    id="firstName" 
                    placeholder=""
                    className="bg-background/50 border-primary/20 focus:border-primary"
                    onChange = {handleChange}
                    value = {firstName}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input 
                    id="lastName" 
                    placeholder=""
                    className="bg-background/50 border-primary/20 focus:border-primary"
                    onChange = {handleChange}
                    value= {lastName}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder=""
                  className="bg-background/50 border-primary/20 focus:border-primary"
                  onChange = {handleChange}
                  value= {email}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder=""
                  rows={6}
                  className="bg-background/50 border-primary/20 focus:border-primary resize-none"
                  onChange = {handleChange}
                  value={message}
                />
              </div>
              
              <Button
                onClick={handleSubmit}
                disabled={loading}
                className="w-full shadow-orange"
                size="lg"
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>

              {success && <p className="text-green-500 mt-2">Message sent successfully!</p>}
              {error && <p className="text-red-500 mt-2">{error}</p>}
            </CardContent>
          </Card>
          <div className = "flex items-center justify-center">
            <img src = {snoopyGIF} alt = {snoopyGIF}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;