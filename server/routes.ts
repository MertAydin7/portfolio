import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { ZodError } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form API endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);
      
      res.status(201).json({
        message: "Message sent successfully",
        data: message
      });
    } catch (error) {
      console.error("Error saving contact message:", error);
      
      if (error instanceof ZodError) {
        return res.status(400).json({
          message: "Invalid form data",
          errors: error.errors
        });
      }
      
      res.status(500).json({
        message: "Failed to save your message. Please try again."
      });
    }
  });

  // Get all contact messages (for demonstration)
  app.get("/api/contact", async (req, res) => {
    try {
      const messages = await storage.getAllContactMessages();
      res.status(200).json(messages);
    } catch (error) {
      console.error("Error getting contact messages:", error);
      res.status(500).json({
        message: "Failed to retrieve messages"
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
