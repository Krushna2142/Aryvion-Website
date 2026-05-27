"use client";

import { useState } from "react";
import { Code2, Workflow, Cloud, BarChart3, Shield, ShoppingCart, LayoutDashboard } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import GlowCard from "../ui/GlowCard";
import ServiceModal from "../ui/ServiceModal";

interface ServiceData {
  icon: React.ElementType;
  title: string;
  description: string;
  shortDesc: string; // used on the card
  bestFor: string[];
  whatWeBuild: string[];
  deliverables: string[];
}

const services: ServiceData[] = [
  {
    icon: Code2,
    title: "IT Services & Consulting",
    shortDesc: "Strategic tech guidance, architecture planning, and digital transformation roadmaps.",
    description: "End-to-end software development and technology consulting for businesses that need scalable digital systems.",
    bestFor: [
      "Business websites and web apps",
      "Client portals",
      "Admin dashboards",
      "ERP/CRM-like systems",
      "Custom software workflows",
    ],
    whatWeBuild: [
      "Full-stack web applications",
      "Business dashboards",
      "Client portals",
      "Internal tools",
      "API-based systems",
    ],
    deliverables: [
      "Requirement analysis",
      "UI/UX structure",
      "Frontend and backend development",
      "Database integration",
      "Deployment support",
    ],
  },
  {
    icon: Workflow,
    title: "AI Automation",
    shortDesc: "Intelligent process automation, agentic workflows, and AI integrations for business operations.",
    description: "AI-powered automation systems that reduce manual work and improve business productivity.",
    bestFor: [
      "Repetitive tasks",
      "Customer query handling",
      "Report generation",
      "Internal workflow automation",
      "Decision support systems",
    ],
    whatWeBuild: [
      "AI assistants",
      "Workflow automation tools",
      "Smart dashboards",
      "AI-based recommendation systems",
      "Automated reporting systems",
    ],
    deliverables: [
      "Workflow analysis",
      "Automation logic",
      "AI/API integration",
      "Dashboard",
      "Testing and deployment",
    ],
  },
  {
    icon: Cloud,
    title: "SaaS Product Development",
    shortDesc: "End-to-end SaaS platforms with multi-tenancy, subscriptions, and modern UX.",
    description: "Scalable SaaS platforms with user roles, dashboards, authentication, subscriptions, and admin systems.",
    bestFor: [
      "Startup MVPs",
      "Subscription-based products",
      "Multi-role platforms",
      "B2B SaaS systems",
      "Product dashboards",
    ],
    whatWeBuild: [
      "MVPs",
      "SaaS dashboards",
      "Role-based systems",
      "Subscription modules",
      "Admin panels",
    ],
    deliverables: [
      "Product architecture",
      "UI development",
      "Backend APIs",
      "Database schema",
      "Authentication",
      "Deployment",
    ],
  },
  {
    icon: BarChart3,
    title: "Data Science & Analytics",
    shortDesc: "Actionable dashboards, real-time analytics, and AI-driven insights.",
    description: "Data dashboards and analytics systems that help businesses understand performance, users, operations, and growth.",
    bestFor: [
      "Business reporting",
      "Sales dashboards",
      "Operational analytics",
      "Predictive insights",
      "Data visualization",
    ],
    whatWeBuild: [
      "Analytics dashboards",
      "Data pipelines",
      "KPI reports",
      "Predictive analytics modules",
      "Visualization systems",
    ],
    deliverables: [
      "Data structure planning",
      "Dashboard design",
      "Analytics implementation",
      "Reports",
      "Deployment",
    ],
  },
  {
    icon: Shield,
    title: "Cyber Security",
    shortDesc: "Secure design reviews, role-based access, encrypted storage, and audit-ready systems.",
    description: "Security-aware software architecture focused on authentication, authorization, data protection, and audit-ready workflows.",
    bestFor: [
      "Apps handling sensitive data",
      "Client portals",
      "Hiring platforms",
      "Admin dashboards",
      "Business systems",
    ],
    whatWeBuild: [
      "Secure authentication flows",
      "Role-based access control",
      "Audit logs",
      "Data protection workflows",
      "Secure API architecture",
    ],
    deliverables: [
      "Security review",
      "Authentication setup",
      "RBAC implementation",
      "Audit logging",
      "Secure API practices",
    ],
  },
  {
    icon: ShoppingCart,
    title: "Commerce Intelligence",
    shortDesc: "AI-enhanced commerce platforms with personalization and inventory intelligence.",
    description: "Digital commerce systems with inventory, orders, customer management, analytics, and intelligent recommendations.",
    bestFor: [
      "Local businesses",
      "Food product brands",
      "E-commerce stores",
      "Inventory-based businesses",
      "Digital selling workflows",
    ],
    whatWeBuild: [
      "Product catalog systems",
      "Order dashboards",
      "Inventory tracking",
      "Customer database",
      "Sales analytics",
    ],
    deliverables: [
      "Commerce workflow planning",
      "Dashboard",
      "Order system",
      "Inventory module",
      "Reports",
    ],
  },
  {
    icon: LayoutDashboard,
    title: "Dashboard & Client Portal Development",
    shortDesc: "Custom dashboards, progress trackers, and client collaboration portals.",
    description: "Custom dashboards and portals that help businesses track work, communicate with clients, and manage operations transparently.",
    bestFor: [
      "Service businesses",
      "Agencies",
      "Consultants",
      "Project-based companies",
      "Internal teams",
    ],
    whatWeBuild: [
      "Client portals",
      "Project tracking dashboards",
      "Ticketing systems",
      "File sharing modules",
      "Timeline tracking",
    ],
    deliverables: [
      "Portal design",
      "Dashboard UI",
      "Backend APIs",
      "User roles",
      "Deployment support",
    ],
  },
];

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<ServiceData | null>(null);

  return (

<section id="services" className="pt-16 pb-20 px-4 max-w-7xl mx-auto">
      <SectionHeader
        title="Services We Provide"
        subtitle="From consulting to complete product delivery, we build intelligent systems that scale."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <GlowCard key={service.title} className="group">
            <div className="flex flex-col h-full">
              <service.icon className="w-8 h-8 text-brand-cyan mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-sm text-gray-400 flex-1">{service.shortDesc}</p>
              <button
                onClick={() => setSelectedService(service)}
                className="mt-4 inline-flex items-center text-sm text-brand-cyan group-hover:underline cursor-pointer transition-all"
              >
                Explore service →
              </button>
            </div>
          </GlowCard>
        ))}
      </div>

      {/* Service Modal */}
      <ServiceModal
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        service={selectedService}
      />
    </section>
  );
}