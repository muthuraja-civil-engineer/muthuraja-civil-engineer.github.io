/**
 * Portfolio Data Store - Muthuraja R
 * Real civil engineering projects, career milestones, software stack & FAQs
 */
export const portfolioData = {
  engineer: {
    name: "Muthuraja R",
    role: "Senior Structural & Civil Infrastructure Engineer",
    shortBio: "Specializing in highway megaprojects, major bridges, viaducts, bored cast-in-situ piling, and rigid pavement execution across UAE, Oman, and India. Over a decade of turning complex structural blueprints into resilient realities.",
    location: "Sharjah / Dubai, UAE & Muscat, Oman",
    email: "muthuraja.civil05@gmail.com",
    phoneUAE: "+91 9585655285",
    phoneOman: "+968 97603126",
    linkedin: "https://www.linkedin.com/in/muthuraja-civil",
    education: "Bachelor of Engineering (B.E.) in Civil Engineering · Anna University"
  },

  metrics: [
    { value: "10+", label: "Years Experience", accent: true },
    { value: "300M", label: "Viaduct Superstructure", accent: false },
    { value: "1500mm", label: "Dia Cast-in-Situ Piling", accent: false },
    { value: "3", label: "Countries (UAE · Oman · India)", accent: true }
  ],

  partners: [
    { name: "NHAI", desc: "National Highways Authority of India" },
    { name: "MSRDC", desc: "Maharashtra Road Development Corp" },
    { name: "MOTC & IT", desc: "Ministry of Transport & Comm. Oman" },
    { name: "Base General Contracting", desc: "Dubai, UAE" },
    { name: "Megha Engineering (MEIL)", desc: "Infrastructure Megaprojects" },
    { name: "NCC Limited", desc: "Engineering & Construction" },
    { name: "Renardet S.A. Partners", desc: "Consulting Engineers L.L.C" },
    { name: "LEA Associates", desc: "South Asia Pvt. Ltd." }
  ],

  projects: [
    {
      id: "samruddhi-viaduct",
      title: "300M Highway Viaduct & Samruddhi Expressway",
      category: "bridges",
      categoryLabel: "Viaducts & Bridges",
      gridSpan: "col-span-8",
      image: "assets/projects/viaduct_launching.jpg",
      description: "Supervised and executed the full construction of a 300M post-tensioned viaduct on the Nagpur-Mumbai Super Communication Expressway (Package 1 & 3). Managed precast post-tensioned girder launching, bearing placement, deck slab casting, shuttering reinforcement, and expansion joints.",
      specs: [
        { label: "Structure", value: "300M Post-Tensioned Viaduct" },
        { label: "Girders", value: "Precast PSC & I-Girders" },
        { label: "Contractor", value: "MEIL / MSRDC" }
      ]
    },
    {
      id: "emirates-road",
      title: "Emirates Road Expansion & Multi-Lane Interchange",
      category: "highways",
      categoryLabel: "Highway Infrastructure",
      gridSpan: "col-span-4",
      image: "assets/projects/highway_expressway.jpg",
      description: "Construction of additional lanes on Emirates Road between Al Zubair IC and Al Muhathab IC. Coordinated heavy earthwork, asphalt paving, road furniture, utility crossings, and traffic diversion management in high-density corridors.",
      specs: [
        { label: "Location", value: "Dubai / Sharjah, UAE" },
        { label: "Employer", value: "Base General Contracting" },
        { label: "Type", value: "Highway Expansion" }
      ]
    },
    {
      id: "nh66-piling",
      title: "Six-Laning NH-66 & Deep Bored Piling Works",
      category: "bridges",
      categoryLabel: "Foundations & Flyovers",
      gridSpan: "col-span-4",
      image: "assets/projects/piling_substructure.jpg",
      description: "Execution of major structural components for the 40km Neeleshwaram-Thaliparambha section of NH-66 in Kerala. Directed bored cast-in-situ piling (1200mm to 1500mm dia), dynamic load tests, pier caps, PSC girders, and vehicular underpasses (VUP & LVUP).",
      specs: [
        { label: "Piling Dia", value: "1200mm - 1500mm" },
        { label: "Client", value: "NHAI / LEA Associates" },
        { label: "Model", value: "HAM Mode (Bharatmala)" }
      ]
    },
    {
      id: "mahlah-mountain-road",
      title: "Mahlah–Ghubbrat Mountain Asphalt Highway",
      category: "highways",
      categoryLabel: "Roads & Rigid Pavement",
      gridSpan: "col-span-4",
      image: "assets/projects/mountain_highway.jpg",
      description: "Asst. Project Engineer executing asphalt roads across rugged terrain in Dima Waattayeen, Oman. Managed rigid pavement construction, dowel bar alignment, concrete placement, joint cutting, rip-rap slope protection, and reinforced gabion retaining walls according to MOTC specs.",
      specs: [
        { label: "Client", value: "MOTC&IT Oman" },
        { label: "Consultant", value: "Renardet S.A." },
        { label: "Scope", value: "Rigid Pavement & Culverts" }
      ]
    },
    {
      id: "bim-structural-model",
      title: "FEA Structural Detailing & 3D Bridge Modeling",
      category: "design",
      categoryLabel: "Structural Design & BIM",
      gridSpan: "col-span-4",
      image: "assets/projects/bim_structural_model.jpg",
      description: "Finite element analysis (FEA), 3D coordination, and bar-bending schedule (BBS) optimization. Conducted clash detection for reinforced concrete elements, prestressed cable profiles, and deep drainage culvert crossings.",
      specs: [
        { label: "Software", value: "STAAD.Pro · Revit · Civil 3D" },
        { label: "Codes", value: "IRC · MORTH · Eurocodes" },
        { label: "Output", value: "GFC Drawings & 3D Models" }
      ]
    }
  ],

  services: [
    {
      icon: "building-2",
      title: "Structural Design & Analysis",
      description: "Comprehensive structural engineering for bridges, viaducts, box culverts, and high-load foundation elements.",
      capabilities: [
        "RCC and PSC beam & girder design calculations",
        "Bored cast-in-situ pile foundation detailing (1200–1500mm)",
        "Review of Good-for-Construction (GFC) drawings & BBS",
        "Retaining walls, counterfort walls & gabion slope stability"
      ]
    },
    {
      icon: "layers",
      title: "BIM & 3D Infrastructure Modeling",
      description: "Modern digital civil engineering workflows to identify clashes early and streamline prefabrication.",
      capabilities: [
        "Revit & AutoCAD 3D structural modeling",
        "Civil 3D roadway corridor and cross-drainage alignment",
        "Bar bending schedule (BBS) automated reconciliation",
        "Utility duct routing (power, water supply, ICT conduits)"
      ]
    },
    {
      icon: "hard-hat",
      title: "Site Supervision & Heavy Erection",
      description: "Decisive leadership on megaproject job sites managing complex staging and heavy machinery.",
      capabilities: [
        "Precast post-tensioned girder launching & bearing placement",
        "Tremie concreting & pile integrity/dynamic load testing",
        "Rigid pavement slipforming, dowel bar alignment & joint cutting",
        "Rigorous contractor, client & consultant QA/QC coordination"
      ]
    },
    {
      icon: "calendar-check",
      title: "Project Management & EPC Controls",
      description: "Ensuring highway and bridge projects adhere strictly to timelines, DPRs, and contractual milestones.",
      capabilities: [
        "Lookahead scheduling & Daily Progress Reports (DPR)",
        "Joint measurement records (JMR) & material reconciliation",
        "Safety compliance (HSE) & pour card certification workflows",
        "Subcontractor execution monitoring and quantity calculations"
      ]
    }
  ],

  softwareStack: [
    { name: "AutoCAD", domain: "Drafting & Detailing", icon: "pen-tool" },
    { name: "STAAD.Pro", domain: "Structural Analysis & FEA", icon: "box" },
    { name: "Autodesk Revit", domain: "BIM 3D Modeling", icon: "cuboid" },
    { name: "AutoCAD Civil 3D", domain: "Roadway Corridors", icon: "git-commit" },
    { name: "Primavera P6", domain: "Project Scheduling", icon: "clock" }
  ],

  timeline: [
    {
      period: "Dec 2025 – Present",
      role: "Structural Engineer",
      company: "Base General Contracting L.L.C · Dubai / Sharjah, UAE",
      responsibilities: [
        "Directing structural execution for the expansion of additional lanes on Emirates Road between Al Zubair IC and Al Muhathab IC.",
        "Managing heavy site operations, traffic diversion phasing, and structural subcontracts under UAE highway standards."
      ]
    },
    {
      period: "Oct 2023 – Dec 2025",
      role: "Assistant Project Engineer",
      company: "Abu Hatim Co. LLC · Dima Waattayeen, Oman",
      responsibilities: [
        "Supervised asphalt road construction, box culverts, rip-rap protection, and rigid pavement for MOTC&IT Oman.",
        "Managed rigid pavement quality: dowel bar alignment, concrete placement, joint cutting, curing, and DPR tracking with Renardet S.A."
      ]
    },
    {
      period: "Apr 2021 – Jul 2023",
      role: "Senior Structural Engineer",
      company: "Megha Engineering & Infrastructures Ltd (MEIL) · Maharashtra & Kerala",
      responsibilities: [
        "Managed execution of 300M post-tensioned viaduct on Nagpur-Mumbai Super Communication Expressway (Samruddhi Mahamarg).",
        "Directed bored cast-in-situ piling (1200mm-1500mm dia), dynamic load tests, and PSC girder launching on Six-Laning of NH-66 (Kerala)."
      ]
    },
    {
      period: "Oct 2017 – Mar 2021",
      role: "Structural Engineer",
      company: "NCC Limited · Andhra Pradesh & Maharashtra",
      responsibilities: [
        "Delivered smart city infrastructure packages in Amaravathi Capital City (major/minor bridges, stormwater drains, utility ducts).",
        "Supervised excavation, raft foundations, counterfort retaining walls, and minor bridges on Samruddhi Expressway (Package 3)."
      ]
    },
    {
      period: "Jun 2015 – Jul 2017",
      role: "Junior Structural Engineer",
      company: "MK Infracon (B) Pvt. Ltd · Tamil Nadu, India",
      responsibilities: [
        "Supervised minor box-type bridges, wing walls, and stormwater drainage systems for SH-70 road upgrade project.",
        "Monitored steel reinforcement fixing, formwork shuttering, and concrete pour cards."
      ]
    }
  ],

  testimonials: [
    {
      quote: "Muthuraja’s command over precast post-tensioned girder launching and deck slab execution on the 300M Samruddhi Expressway Viaduct was exemplary. High technical precision and zero tolerance for safety compromise.",
      author: "Senior Project Director",
      organization: "Infrastructure Megaproject Division, MEIL",
      rating: 5
    },
    {
      quote: "On our Oman mountain highway contracts, his attention to rigid pavement specifications, dowel alignment, and joint cutting made consultant approvals effortless. An outstanding site leader.",
      author: "Resident Consultant Engineer",
      organization: "Renardet S.A. & Partners Consulting Engineers",
      rating: 5
    },
    {
      quote: "Bridging the divide between architectural drawings and site construction is rare. Muthuraja's thorough review of GFC drawings and bar bending schedules prevented multiple critical site hold-ups.",
      author: "Chief Structural Architect",
      organization: "Urban Highway & Bridge Design Consortium",
      rating: 5
    }
  ],

  faqs: [
    {
      question: "How do we start the initial planning phase for an infrastructure project?",
      answer: "We begin with a thorough review of Good-For-Construction (GFC) drawings, topographical surveys, and geotechnical reports. From there, we formulate a construction methodology, bar bending schedule (BBS) verification, resource mobilization lookahead, and quality control matrices aligned with MORTH, MOTC, or local highway authority standards."
    },
    {
      question: "Do you handle on-site inspections and QA/QC compliance?",
      answer: "Yes. I have 10+ years of direct on-site management ensuring full compliance with technical specifications. This includes pre-pour inspections, rebar verticality and cover verification, concrete slump & cube tests, pile dynamic load and integrity tests, and RFI sign-offs with resident consultants."
    },
    {
      question: "What software stack do you use for structural analysis & BIM?",
      answer: "My core digital stack includes AutoCAD and Civil 3D for geometric and roadway corridor detailing, STAAD.Pro for structural finite element analysis (FEA), Autodesk Revit for 3D BIM coordination & clash detection, and Primavera P6 for master project scheduling and lookahead tracking."
    },
    {
      question: "Can you manage girder casting and heavy lifting site operations?",
      answer: "Absolutely. I have direct hands-on experience casting and launching both RCC and PSC (precast post-tensioned) box girders and I-girders for 300M+ viaducts and major bridges, including launching gantry coordination, bearing placement, prestressing tendon grouting, and deck expansion joints."
    },
    {
      question: "How do you coordinate between architects, consultants, and subcontractors?",
      answer: "Through rigorous daily progress reports (DPRs), regular milestone coordination meetings, Joint Measurement Records (JMRs), and proactive RFI submissions. Resolving site discrepancies before concrete is poured ensures budget adherence and prevents costly rework."
    }
  ]
};
