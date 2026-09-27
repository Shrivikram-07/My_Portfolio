import { Project } from "@/lib/types";

export const projectsData: Project[] = [
  {
    slug: "ai-oil-spill-detection",
    title: "AI-Based Oil Spillage Detection & Vessel Attribution",
    tagline:
      "Satellite computer vision pipeline for oil slick detection integrated with AIS vessel anomaly analysis and oceanographic attribution.",
    category: "AI & Maritime Systems",
    summary:
      "An intelligent maritime monitoring system developed to identify marine oil slicks from satellite imagery, distinguish authentic discharge from look-alikes, and correlate vessel AIS trajectories, proximity, and dark periods to identify suspect vessels.",
    highlights: [
      {
        label: "Satellite Computer Vision",
        text: "AI-driven detection of oil spills from satellite imagery, distinguishing oil signatures from natural look-alikes.",
      },
      {
        label: "AIS Anomaly Workflow",
        text: "Correlating vessel trajectories, spatiotemporal proximity, and transponder dark periods for suspect identification.",
      },
      {
        label: "Oceanographic Attribution",
        text: "Incorporating ocean currents and wind drift to map spill movement and rank suspect vessel attribution.",
      },
    ],
    overview:
      "Marine oil spills pose devastating ecological hazards. Traditional manual inspection of remote satellite imagery is slow and prone to false positives caused by natural biogenic sheens or calm sea conditions. This project builds an automated end-to-end framework combining computer vision on satellite imagery with Automatic Identification System (AIS) vessel telemetry and oceanographic factors to detect slicks and isolate suspect vessels responsible for illegal or accidental discharge.",
    problem:
      "Rapidly identifying marine oil pollution from large-scale satellite captures requires filtering out natural oceanographic look-alikes (low wind areas, algal blooms). Furthermore, once a spill is identified in open waters, attributing the incident to a specific maritime vessel requires correlating historical vessel tracks, speed variations, and suspicious AIS transponder shutdowns ('dark periods').",
    solution:
      "Developed a dual-engine architecture: a computer vision processing pipeline that isolates oil slick signatures from satellite imagery, coupled with an anomaly-detection telemetry engine that evaluates AIS vessel positions, proximity to the slick origin, speed anomalies, and gaps in AIS broadcasts while factoring in ocean current and wind drift.",
    technologies: [
      "Python",
      "Machine Learning",
      "Computer Vision",
      "Satellite Imagery",
      "AIS Data",
      "NumPy",
      "Pandas",
    ],
    featured: true,
    previewType: "pipeline",
    pipeline: [
      {
        title: "Satellite Imagery Ingestion",
        description: "SAR & Optical Datasets",
        detail: "Ingestion of marine satellite captures covering high-density shipping corridors.",
      },
      {
        title: "Pre-processing & Filtering",
        description: "Look-Alike Disambiguation",
        detail: "Distinguishing authentic petroleum slick signatures from natural look-alikes (algae, low-wind zones).",
      },
      {
        title: "Spill Detection & Segmentation",
        description: "Computer Vision / ML",
        detail: "Extracting slick boundary polygons, estimating spill surface area, intensity, and centroid.",
      },
      {
        title: "AIS Telemetry Correlation",
        description: "Vessel Movement Stream",
        detail: "Parsing dynamic AIS logs (MMSI, coordinate trails, heading, and speed records).",
      },
      {
        title: "Anomaly Analysis Engine",
        description: "Dark Periods & Proximity",
        detail: "Detecting vessel proximity windows, erratic speed drops, and unannounced transponder cutoffs.",
      },
      {
        title: "Oceanographic Attribution",
        description: "Drift & Suspect Isolation",
        detail: "Incorporating ocean currents and wind vectors to trace slick drift back to suspect vessel coordinates.",
      },
    ],
    architecturePoints: [
      "High-resolution satellite imagery ingestion pipeline tailored for marine surface analysis.",
      "Machine learning computer vision module optimized to isolate dark-spot oil signatures against complex ocean backgrounds.",
      "Look-alike discrimination logic minimizing false alarms caused by natural oceanographic occurrences.",
      "AIS trajectory decoding engine tracking vessel proximity windows and timestamped navigational waypoints.",
      "Suspicious behavior and anomaly detector identifying transponder silence ('dark periods') and localized speed deviations.",
      "Drift vector analysis integrating oceanographic currents and environmental parameters.",
      "Dashboard visualization architecture presenting spill location, intensity heatmaps, and suspect vessel candidates.",
    ],
    keyContributions: [
      "Engineered the AI-driven pipeline to process satellite imagery and distinguish authentic oil slicks from marine look-alikes.",
      "Built the AIS vessel anomaly analysis workflow evaluating vessel trajectories, spatiotemporal proximity, and AIS dark periods.",
      "Incorporated environmental and oceanographic factors into the spill-movement analysis model to improve attribution accuracy.",
      "Designed the operational dashboard concept providing maritime operators with intuitive visualization of spill intensity, location, and vessel attribution rankings.",
    ],
    challenges: [
      "Distinguishing petroleum slick signatures from natural low-wind areas and biogenic slicks which share similar dark radar reflections.",
      "Handling massive, irregular AIS telemetry streams and reconstructing accurate ship paths during transponder broadcast dropouts.",
      "Compensating for maritime drift where the current spill location differs from the coordinate of the initial release event.",
    ],
    outcomes: [
      "Winner / 1st Place at the AI International Conclave Hackathon for AI-based marine engineering improving vessel operations.",
      "Selected as Finalist at the Smart India Hackathon (SIH) 2026 Internal Hackathon for maritime engineering innovation.",
      "Established a validated architectural blueprint for automated maritime surveillance and environmental compliance monitoring.",
    ],
    githubUrl: "https://github.com/Shrivikram-07",
    demoBadge: "Winner — AI Conclave",
  },
  {
    slug: "yieldsense-defi-risk-dashboard",
    title: "YieldSense — DeFi Liquidity Risk Dashboard",
    tagline:
      "Real-time DeFi risk analytics platform combining FinBERT market sentiment, ML safety scoring, and Solana telemetry.",
    category: "FinTech & Web3",
    summary:
      "A comprehensive decentralized finance dashboard built to evaluate liquidity pools, calculate APY dynamics and impermanent loss, and deliver predictive risk indicators powered by FinBERT sentiment and machine learning.",
    highlights: [
      {
        label: "Liquidity Pool Risk Matrix",
        text: "Real-time analysis of liquidity pools, APY rates, impermanent loss dynamics, and protocol indicators.",
      },
      {
        label: "FinBERT NLP & ML Safety Model",
        text: "Integrated FinBERT sentiment analysis and machine-learning scoring model for pool safety evaluation.",
      },
      {
        label: "Solana Telemetry & Wallet Integration",
        text: "Interactive Solana blockchain data integration and live web3 wallet connectivity.",
      },
    ],
    overview:
      "Decentralized Finance (DeFi) liquidity providers face hidden risks ranging from sudden impermanent loss and liquidity drains to negative market sentiment and smart contract vulnerabilities. YieldSense provides an analytical workstation combining live Solana on-chain liquidity data, natural language sentiment processing via FinBERT, and machine learning safety scoring to provide decentralized finance participants with transparent risk metrics.",
    problem:
      "DeFi participants often evaluate liquidity opportunities solely by nominal APY figures without understanding volatility exposure, impermanent loss risks, or underlying market sentiment shifts, leading to unexpected capital degradation.",
    solution:
      "YieldSense aggregates live pool parameters on the Solana blockchain and pairs them with automated sentiment extraction from financial discourse via FinBERT and a multi-factor ML safety scoring model, rendering actionable risk metrics in a high-speed React dashboard with web3 wallet connectivity.",
    technologies: [
      "React.js",
      "Solana",
      "Machine Learning",
      "FinBERT",
      "Wallet Integration",
      "Tailwind CSS",
      "JavaScript",
    ],
    featured: true,
    previewType: "dashboard",
    architecturePoints: [
      "Solana RPC integration for live on-chain pool telemetry, token pair ratios, and transaction velocity.",
      "Impermanent loss simulation module modeling token divergence against static hold benchmarks.",
      "FinBERT NLP pipeline processing financial sentiment to detect negative shifts and volatility indicators.",
      "Multi-factor machine learning safety scoring model aggregating liquidity depth, volatility, and sentiment scores.",
      "Web3 wallet adapter enabling seamless connection and portfolio inspection directly on the Solana network.",
      "Responsive React.js dashboard UI displaying real-time risk gauges, yield projections, and safety alerts.",
    ],
    keyContributions: [
      "Architected the interactive React.js dashboard interface for exploring liquidity pools, APYs, and impermanent loss forecasts.",
      "Integrated FinBERT-based sentiment analysis into the risk evaluation pipeline to capture qualitative market sentiment.",
      "Implemented the machine-learning safety scoring model that synthesizes quantitative volatility and sentiment into a clear risk rating.",
      "Connected Solana blockchain data feeds and integrated web3 wallet connectivity for seamless user interaction.",
    ],
    challenges: [
      "Normalizing diverse on-chain metrics from decentralized liquidity pools into consistent feature inputs for the ML safety model.",
      "Ensuring rapid dashboard responsiveness while querying live blockchain states and running client-side risk simulations.",
      "Calibrating FinBERT sentiment classifications to distinguish noisy social commentary from genuine market-moving events.",
    ],
    outcomes: [
      "Awarded 2nd Place at DEFY'26 Hackathon (VIT, FinTech Domain) for outstanding application design and technical execution.",
      "Delivered a working prototype that empowers DeFi users with institutional-grade risk visibility on Solana.",
    ],
    githubUrl: "https://github.com/Shrivikram-07",
    demoBadge: "2nd Place — DEFY'26",
  },
  {
    slug: "tansam-task-management-system",
    title: "Employee Task Management System",
    tagline:
      "Enterprise workflow and productivity management system engineered with React.js and Django REST APIs.",
    category: "Full-Stack Enterprise",
    summary:
      "A robust enterprise task management and workflow coordination platform developed during the TANSAM software development internship, supporting multi-tier task creation, assignment, progress monitoring, and iterative lifecycle transitions.",
    highlights: [
      {
        label: "React & Django REST Architecture",
        text: "Full-stack enterprise application covering complete task creation, assignment, and progress tracking.",
      },
      {
        label: "Workflow State & Status Monitoring",
        text: "Built workflow features for granular status updates, team progress monitoring, and usability.",
      },
      {
        label: "Testing, Debugging & Reliability",
        text: "Collaborated on requirements analysis, iterative testing, and feature refinements based on reviews.",
      },
    ],
    overview:
      "Engineered at Tamil Nadu Startup and Innovation Mission (TANSAM), this application addresses internal workflow orchestration across diverse project teams. The solution bridges a modular, responsive React.js frontend with an authenticated Django REST backend, providing real-time visibility into project deliverables, department tasks, and team milestones.",
    problem:
      "Internal project teams required an intuitive, centralized platform to replace fragmented task updates, monitor task dependencies, and enforce consistent review workflows without operational bottlenecks.",
    solution:
      "Developed a full-stack web application featuring role-aware task creation, dynamic assignment matrices, real-time workflow status transitions, and automated progress analytics, verified through rigorous testing and team feedback iterations.",
    technologies: [
      "React.js",
      "Django",
      "REST APIs",
      "Python",
      "JavaScript",
      "CSS",
      "Git",
    ],
    featured: true,
    previewType: "workflow",
    architecturePoints: [
      "Modular React.js component architecture with responsive layout states and intuitive status indicators.",
      "Django REST framework backend providing clean endpoint contracts, data serialization, and validation.",
      "Structured workflow state engine tracking lifecycle states: Assigned → In Progress → Review → Completed.",
      "Comprehensive progress monitoring module delivering department-level and employee-level task completion overviews.",
      "Systematic unit and integration testing suite ensuring API contract stability and error-free state transitions.",
    ],
    keyContributions: [
      "Developed the core employee Task Management System using React.js and Django, covering full task creation, assignment, and progress tracking.",
      "Built intuitive workflow features for granular status updates and progress monitoring, significantly improving usability for end users.",
      "Collaborated closely with the engineering team on requirements analysis, API contract design, manual/automated testing, and debugging.",
      "Refined application features based on testing feedback, stakeholder reviews, and iterative sprint cycles.",
    ],
    challenges: [
      "Designing a clean relational data model capable of accommodating fluid task dependencies and historical audit trails.",
      "Aligning React frontend state management with Django REST endpoints to ensure instantaneous UI updates during status shifts.",
      "Iterating rapidly on UI usability based on real user feedback from enterprise team reviews.",
    ],
    outcomes: [
      "Successfully deployed for internal workflow monitoring at Tamil Nadu Startup and Innovation Mission (TANSAM).",
      "Demonstrated measurable improvement in task visibility, assignment clarity, and project tracking consistency.",
    ],
    githubUrl: "https://github.com/Shrivikram-07",
    demoBadge: "TANSAM Enterprise Tool",
  },
];
