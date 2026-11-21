"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { CinematicBg } from "./CinematicBg";

interface Ticket {
  id: string;
  subject: string;
  status: "open" | "in-progress" | "resolved";
  priority: "low" | "medium" | "high";
  created: string;
  updated: string;
}

interface Project {
  id: string;
  name: string;
  status: "active" | "completed" | "on-hold";
  progress: number;
  agents: number;
  lastActivity: string;
}

const mockTickets: Ticket[] = [
  {
    id: "TKT-001",
    subject: "API Integration Support",
    status: "in-progress",
    priority: "high",
    created: "2024-01-15",
    updated: "2 hours ago",
  },
  {
    id: "TKT-002",
    subject: "Agent Performance Optimization",
    status: "open",
    priority: "medium",
    created: "2024-01-14",
    updated: "5 hours ago",
  },
  {
    id: "TKT-003",
    subject: "Custom Model Training",
    status: "resolved",
    priority: "low",
    created: "2024-01-10",
    updated: "3 days ago",
  },
];

const mockProjects: Project[] = [
  {
    id: "PRJ-001",
    name: "Recruitment AI Pipeline",
    status: "active",
    progress: 78,
    agents: 12,
    lastActivity: "2 hours ago",
  },
  {
    id: "PRJ-002",
    name: "Supply Chain Automation",
    status: "active",
    progress: 45,
    agents: 8,
    lastActivity: "5 hours ago",
  },
  {
    id: "PRJ-003",
    name: "Customer Support Bot",
    status: "on-hold",
    progress: 30,
    agents: 4,
    lastActivity: "2 days ago",
  },
];

export function PortalPage() {
  const [activeTab, setActiveTab] = useState<"overview" | "projects" | "tickets" | "billing">("overview");

  return (
    <section className="relative min-h-screen pt-28 pb-20 overflow-hidden">
      <CinematicBg />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
                Customer <span className="gradient-text">Portal</span>
              </h1>
              <p className="mt-2 text-white/60">
                Manage your projects, tickets, and billing
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-cyan to-violet flex items-center justify-center">
                <span className="text-sm font-semibold">JD</span>
              </div>
              <div>
                <div className="text-sm font-medium">Jane Doe</div>
                <div className="text-xs text-white/50">Acme Corp</div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <div className="flex gap-2 p-1 rounded-xl glass hairline inline-flex overflow-x-auto">
            {[
              { id: "overview", label: "Overview" },
              { id: "projects", label: "Projects" },
              { id: "tickets", label: "Support" },
              { id: "billing", label: "Billing" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? "bg-white/10 text-white"
                    : "text-white/60 hover:text-white/80"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="space-y-6">
          {activeTab === "overview" && (
            <OverviewSection tickets={mockTickets} projects={mockProjects} />
          )}
          {activeTab === "projects" && <ProjectsSection projects={mockProjects} />}
          {activeTab === "tickets" && <TicketsSection tickets={mockTickets} />}
          {activeTab === "billing" && <BillingSection />}
        </div>
      </div>
    </section>
  );
}

function OverviewSection({ tickets, projects }: { tickets: Ticket[]; projects: Project[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="space-y-6"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Active Projects", value: "3", change: "+1 this month" },
          { label: "Open Tickets", value: "2", change: "1 high priority" },
          { label: "AI Agents Deployed", value: "24", change: "+8 this week" },
          { label: "API Calls (24h)", value: "12.4K", change: "+15% from last week" },
        ].map((stat, i) => (
          <div key={i} className="glass-card p-5">
            <div className="text-xs text-white/50 font-mono mb-1">{stat.label}</div>
            <div className="text-2xl font-semibold text-white mb-1">{stat.value}</div>
            <div className="text-xs text-cyan/80">{stat.change}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass-card p-6">
          <h3 className="text-lg font-semibold mb-4">Active Projects</h3>
          <div className="space-y-3">
            {projects.slice(0, 3).map((project) => (
              <div key={project.id} className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                <div>
                  <div className="text-sm font-medium">{project.name}</div>
                  <div className="text-xs text-white/50">{project.agents} agents active</div>
                </div>
                <div className={`px-2 py-1 rounded text-xs font-mono ${
                  project.status === "active" ? "bg-emerald-400/10 text-emerald-400" :
                  project.status === "on-hold" ? "bg-amber-400/10 text-amber-400" :
                  "bg-white/10 text-white/60"
                }`}>
                  {project.status}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card p-6">
          <h3 className="text-lg font-semibold mb-4">Recent Tickets</h3>
          <div className="space-y-3">
            {tickets.slice(0, 3).map((ticket) => (
              <div key={ticket.id} className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                <div>
                  <div className="text-sm font-medium">{ticket.subject}</div>
                  <div className="text-xs text-white/50">{ticket.id} · {ticket.updated}</div>
                </div>
                <div className={`px-2 py-1 rounded text-xs font-mono ${
                  ticket.status === "resolved" ? "bg-emerald-400/10 text-emerald-400" :
                  ticket.status === "in-progress" ? "bg-cyan-400/10 text-cyan-400" :
                  "bg-amber-400/10 text-amber-400"
                }`}>
                  {ticket.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectsSection({ projects }: { projects: Project[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="glass-card p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold">All Projects</h3>
        <button className="px-4 py-2 rounded-lg btn-primary text-sm">
          + New Project
        </button>
      </div>
      <div className="space-y-4">
        {projects.map((project) => (
          <div key={project.id} className="p-5 rounded-xl bg-white/5 border border-white/10">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h4 className="text-lg font-medium mb-1">{project.name}</h4>
                <p className="text-sm text-white/50">{project.id} · Last activity: {project.lastActivity}</p>
              </div>
              <span className={`px-3 py-1 rounded-lg text-xs font-mono ${
                project.status === "active" ? "bg-emerald-400/10 text-emerald-400" :
                project.status === "on-hold" ? "bg-amber-400/10 text-amber-400" :
                "bg-white/10 text-white/60"
              }`}>
                {project.status.toUpperCase()}
              </span>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-white/60">Progress</span>
                <span className="font-medium">{project.progress}%</span>
              </div>
              <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-cyan to-violet rounded-full transition-all duration-500"
                  style={{ width: `${project.progress}%` }}
                />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-4 text-sm text-white/50">
              <span className="flex items-center gap-1">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                {project.agents} agents
              </span>
              <button className="text-cyan hover:text-cyan/80 transition-colors">
                View Details →
              </button>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function TicketsSection({ tickets }: { tickets: Ticket[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="glass-card p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold">Support Tickets</h3>
        <button className="px-4 py-2 rounded-lg btn-primary text-sm">
          + New Ticket
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left py-3 px-4 text-xs font-mono text-white/50">ID</th>
              <th className="text-left py-3 px-4 text-xs font-mono text-white/50">Subject</th>
              <th className="text-left py-3 px-4 text-xs font-mono text-white/50">Status</th>
              <th className="text-left py-3 px-4 text-xs font-mono text-white/50">Priority</th>
              <th className="text-left py-3 px-4 text-xs font-mono text-white/50">Updated</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket) => (
              <tr key={ticket.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="py-4 px-4 text-sm font-mono">{ticket.id}</td>
                <td className="py-4 px-4 text-sm">{ticket.subject}</td>
                <td className="py-4 px-4">
                  <span className={`px-2 py-1 rounded text-xs font-mono ${
                    ticket.status === "resolved" ? "bg-emerald-400/10 text-emerald-400" :
                    ticket.status === "in-progress" ? "bg-cyan-400/10 text-cyan-400" :
                    "bg-amber-400/10 text-amber-400"
                  }`}>
                    {ticket.status}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <span className={`text-xs font-mono ${
                    ticket.priority === "high" ? "text-red-400" :
                    ticket.priority === "medium" ? "text-amber-400" :
                    "text-white/60"
                  }`}>
                    {ticket.priority}
                  </span>
                </td>
                <td className="py-4 px-4 text-sm text-white/50">{ticket.updated}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}

function BillingSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      <div className="glass-card p-6">
        <h3 className="text-xl font-semibold mb-6">Current Plan</h3>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 rounded-xl bg-gradient-to-br from-cyan/10 to-violet/10 border border-cyan/20">
          <div>
            <div className="text-2xl font-semibold mb-1">Enterprise</div>
            <div className="text-sm text-white/60">Unlimited agents · Priority support · Custom integrations</div>
          </div>
          <div className="text-right">
            <div className="text-3xl font-semibold mb-1">$2,499<span className="text-lg text-white/50">/mo</span></div>
            <button className="text-sm text-cyan hover:text-cyan/80 transition-colors">
              Manage subscription →
            </button>
          </div>
        </div>
      </div>

      <div className="glass-card p-6">
        <h3 className="text-xl font-semibold mb-6">Usage This Month</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { label: "API Calls", used: "245K", total: "500K", percent: 49 },
            { label: "Agent Hours", used: "1,240", total: "2,000", percent: 62 },
            { label: "Storage", used: "45GB", total: "100GB", percent: 45 },
          ].map((usage, i) => (
            <div key={i} className="p-4 rounded-xl bg-white/5">
              <div className="text-sm text-white/60 mb-2">{usage.label}</div>
              <div className="text-lg font-semibold mb-2">{usage.used} / {usage.total}</div>
              <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-cyan to-violet rounded-full"
                  style={{ width: `${usage.percent}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}