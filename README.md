# NETCORE — Complete Computer Networking Learning Platform

An interactive, responsive, and bilingual educational platform dedicated exclusively to **Computer Networking** from foundational principles to advanced enterprise routing, packet switching, and protocol analysis.

Created and architected by:
**MD. MOJAHIDUR RAHMAN SAJID**  
*Department of Computer Science & Technology, Bogura Polytechnic Institute*  
*GitHub: [@mojahid-sec](https://github.com/mojahid-sec)*

---

## 🌟 Core Pillars of NETCORE

1. **Exclusively Focused on Computer Networking**:
   - Zero distraction: no generic cybersecurity, hacking, or penetration testing courses.
   - Comprehensive technical coverage: Physical cabling, Data Link switching, IPv4/IPv6 CIDR subnetting, dynamic routing, transport reliability, and application protocols.

2. **English + Bangla Bilingual Engine**:
   - Seamless language toggle between English and natural, easy-to-understand Bangla.
   - 20-Section detailed lesson structure with bilingual titles, explanations, mechanical processes, step-by-step working diagrams, CLI outputs, and interactive quizzes.

3. **Mechanical Visual Simulators & Sandboxes**:
   - **Router Packet Forwarding**: Longest Prefix Match (LPM), TTL decrement (64 to 63), and Layer 2 MAC rewriting.
   - **Switch MAC Learning**: 4-port switch CAM table population, known unicast forwarding, unknown unicast flooding, and filtering.
   - **DNS Resolution Chain**: Step-by-step recursive query traversal through Root (.), TLD (.org), and Authoritative servers.
   - **DHCP DORA Exchange**: 4-way Discover, Offer, Request, and Acknowledgment IP lease flow.
   - **TCP 3-Way Handshake & Teardown**: SEQ/ACK synchronization and 4-way FIN/ACK socket closure.
   - **32-Bit Subnet Visualizer**: Real-time binary bit partitioning between network and host portions.
   - **Network Topologies**: Interactive layout switcher for Bus, Star, Ring, Mesh, Tree, and Hybrid topologies with failure analysis.

4. **14-Section Hands-On Practical Labs**:
   - Labs covering Basic Networking, IP Addressing, Windows Networking, Linux & Kali Linux, Routing & Switching, and Wireshark Packet Analysis.
   - Step-by-step commands with parameter breakdowns, simulated terminal outputs, troubleshooting guides, common traps, and practice challenges.

5. **Self-Assessment Quiz System**:
   - MCQs, True/False, Short-Answer, Scenario-based, Command-based, Subnetting, and Troubleshooting questions.
   - Answers concealed until submission, followed by bilingual evaluations and score persistence.

6. **Private LocalStorage Progress**:
   - Lesson, lab, and quiz progress stored locally per browser with zero fake statistics or external sync claims.

---

## 💻 How to Run the Project in Visual Studio Code (VS Code)

Follow these simple steps to run NETCORE locally:

1. **Install Node.js**:
   - Download and install Node.js (version 18, 20, or newer) from [nodejs.org](https://nodejs.org/).
   - Verify installation in your terminal:
     ```bash
     node -v
     npm -v
     ```

2. **Open the Project Folder in VS Code**:
   - Launch Visual Studio Code.
   - Go to `File` > `Open Folder...` (or press `Ctrl+K Ctrl+O` on Windows/Linux or `Cmd+O` on macOS) and select the `netcore` project root directory.

3. **Open the Integrated Terminal**:
   - In VS Code, open the terminal by pressing `Ctrl+\`` (backtick) or going to `Terminal` > `New Terminal`.

4. **Install Dependencies**:
   - Run the following command to download all project dependencies:
     ```bash
     npm install
     ```

5. **Run the Development Server**:
   - Start the local Vite development server:
     ```bash
     npm run dev
     ```

6. **Open the Local Development URL**:
   - Open your web browser and navigate to:
     ```
     http://localhost:3000
     ```
   - (Or `http://localhost:5173` if running on standard Vite defaults).

7. **Test the Production Build**:
   - To verify that the application compiles without any TypeScript or bundling errors, run:
     ```bash
     npm run build
     ```
   - You can also run the automated unit test suite:
     ```bash
     npx --yes tsx --test src/utils/networkUtils.test.ts src/data/curriculum/curriculum.test.ts src/data/labs.test.ts
     ```

---

## 📁 Source Folder Structure & Key Files

```
NETCORE/
├── public/                     # Static assets & icons
├── src/
│   ├── components/
│   │   ├── hero/               # Hero banner & Tumble Deck 3D showcase
│   │   │   ├── HeroSection.tsx
│   │   │   └── TumbleDeckPlaceholder.tsx
│   │   ├── home/               # Homepage educational sections
│   │   │   ├── AboutPreviewSection.tsx
│   │   │   ├── LabsSection.tsx
│   │   │   ├── LearningOverview.tsx
│   │   │   ├── RoadmapSection.tsx
│   │   │   └── VisualSection.tsx
│   │   ├── layout/             # Navigation bar, Footer, and App Shell
│   │   │   ├── Footer.tsx
│   │   │   ├── Layout.tsx
│   │   │   └── Navbar.tsx
│   │   ├── lessons/            # 20-section lesson components
│   │   │   └── KnowledgeCheckSection.tsx
│   │   └── visuals/            # Interactive mechanical networking simulators
│   │       ├── DhcpDoraVisual.tsx
│   │       ├── DnsResolutionVisual.tsx
│   │       ├── OsiTcpIpComparisonVisual.tsx
│   │       ├── PacketTransmissionVisual.tsx
│   │       ├── RouterForwardingVisual.tsx
│   │       ├── SubnetVisualizer.tsx
│   │       ├── SwitchMacLearningVisual.tsx
│   │       ├── TcpHandshakeVisual.tsx
│   │       ├── TopologiesVisual.tsx
│   │       └── VlanSegmentationVisual.tsx
│   ├── context/
│   │   ├── LanguageContext.tsx # EN / BN state provider
│   │   └── ProgressContext.tsx # LocalStorage student progress provider
│   ├── data/
│   │   ├── curriculum/         # 12-Level, 167-topic networking curriculum
│   │   │   ├── curriculum.test.ts
│   │   │   ├── fullCurriculumData.ts
│   │   │   ├── index.ts
│   │   │   └── types.ts
│   │   ├── lessons/            # 20-section handcrafted & dynamic lesson registry
│   │   │   ├── handcraftedLessons.ts
│   │   │   └── index.ts
│   │   ├── authorData.ts       # Creator academic details (MD. MOJAHIDUR RAHMAN SAJID)
│   │   ├── diagramsData.ts     # 11 interactive architectural network diagrams
│   │   ├── labsData.ts         # 14-section practical labs across 6 disciplines
│   │   ├── labs.test.ts        # Unit tests verifying lab standard compliance
│   │   ├── modulesData.ts      # Modules & lessons mapping
│   │   ├── navigation.ts       # Standard public platform navigation labels
│   │   └── quizData.ts         # Comprehensive quiz dataset (MCQs, True/False, Scenarios, CLI)
│   ├── pages/
│   │   ├── AboutPage.tsx       # Creator & project background
│   │   ├── DiagramsPage.tsx    # Interactive diagram viewer suite
│   │   ├── HomePage.tsx        # Public landing experience
│   │   ├── LabDetailPage.tsx   # 14-section lab manual & CLI sandbox
│   │   ├── LabsPage.tsx        # Practical labs directory
│   │   ├── LessonDetailPage.tsx# 20-section detailed lesson reader
│   │   ├── LessonsPage.tsx     # Lessons directory with level filters
│   │   ├── PracticePage.tsx    # Multi-format quiz & practice engine
│   │   ├── ProgressPage.tsx    # Local learning progress dashboard
│   │   └── RoadmapPage.tsx     # 12-Level curriculum roadmap
│   ├── types/
│   │   └── lessonTypes.ts      # TypeScript interfaces for 20-section lessons
│   ├── utils/
│   │   ├── networkUtils.ts     # Subnetting math, CIDR & IP validation algorithms
│   │   └── networkUtils.test.ts# Unit tests for networking math
│   ├── App.tsx                 # Route declarations
│   ├── index.css               # Tailwind CSS entry
│   └── main.tsx                # React DOM root
├── index.html                  # HTML entry point
├── metadata.json               # Applet metadata configuration
├── package.json                # Project dependencies & scripts
├── tsconfig.json               # TypeScript configuration
└── vite.config.ts              # Vite build setup
```

---

## 📜 License & Copyright

© 2026 NETCORE. Dedicated to accessible, high-quality Computer Networking education.
Created by MD. MOJAHIDUR RAHMAN SAJID (Bogura Polytechnic Institute).
