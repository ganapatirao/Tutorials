// Resume Template Data Library
// Contains sample data for different roles and experience levels

const resumeTemplates = {
    // IT & Software Roles
    softwareEngineer: {
        fresher: {
            name: "Alex Johnson",
            title: "Junior Software Engineer",
            summary: "Recent Computer Science graduate with strong programming skills in Python, JavaScript, and Java. Passionate about building scalable applications and learning new technologies. Completed multiple projects demonstrating problem-solving abilities and attention to detail.",
            skills: ["Python", "JavaScript", "Java", "HTML/CSS", "Git", "SQL", "REST APIs", "Data Structures"],
            experience: [
                {
                    title: "Software Development Intern",
                    company: "TechStart Inc.",
                    location: "San Francisco, CA",
                    date: "June 2024 - August 2024",
                    description: [
                        "Developed RESTful APIs using Python Flask framework",
                        "Collaborated with senior engineers on feature development",
                        "Wrote unit tests achieving 80% code coverage",
                        "Participated in code reviews and agile ceremonies"
                    ]
                }
            ],
            projects: [
                {
                    title: "Weather Application",
                    description: "Built a weather forecasting app using React and OpenWeather API with location-based services and 7-day forecasts."
                },
                {
                    title: "Task Manager",
                    description: "Created a full-stack task management application using Python, Flask, and PostgreSQL with user authentication."
                }
            ],
            education: {
                degree: "Bachelor of Science in Computer Science",
                school: "University of California, Berkeley",
                location: "Berkeley, CA",
                date: "Graduated May 2024",
                gpa: "GPA: 3.7/4.0"
            },
            certifications: ["AWS Cloud Practitioner", "Google IT Support Professional"],
            achievements: [
                "Dean's List: Fall 2022, Spring 2023",
                "Hackathon Winner - Best Mobile App 2023",
                "Published article on Python best practices"
            ]
        },
        senior: {
            name: "Michael Chen",
            title: "Senior Software Engineer",
            summary: "Senior software engineer with 8+ years of experience in full-stack development, cloud architecture, and team leadership. Proven track record of delivering scalable solutions that drive business growth. Expert in microservices, DevOps, and modern JavaScript frameworks.",
            skills: ["JavaScript", "React", "Node.js", "Python", "AWS", "Docker", "Kubernetes", "CI/CD", "Microservices", "System Design"],
            experience: [
                {
                    title: "Senior Software Engineer",
                    company: "CloudScale Technologies",
                    location: "Seattle, WA",
                    date: "January 2021 - Present",
                    description: [
                        "Led migration of monolithic application to microservices architecture",
                        "Reduced infrastructure costs by 45% through cloud optimization",
                        "Mentored team of 6 junior and mid-level developers",
                        "Implemented automated testing pipeline reducing bugs by 60%"
                    ]
                },
                {
                    title: "Software Engineer",
                    company: "Digital Innovations Corp",
                    location: "San Francisco, CA",
                    date: "March 2018 - December 2020",
                    description: [
                        "Developed scalable web applications serving 500K+ users",
                        "Built real-time data processing systems using Kafka and Spark",
                        "Optimized database queries improving performance by 70%",
                        "Collaborated with product team on feature roadmap"
                    ]
                }
            ],
            projects: [
                {
                    title: "Enterprise Dashboard Platform",
                    description: "Led development of analytics dashboard processing 10M+ daily events with real-time visualization and predictive analytics."
                },
                {
                    title: "API Gateway Solution",
                    description: "Designed and implemented API gateway handling 1M+ requests/day with rate limiting, caching, and monitoring."
                }
            ],
            education: {
                degree: "Master of Science in Computer Science",
                school: "Stanford University",
                location: "Stanford, CA",
                date: "Graduated June 2018",
                gpa: "GPA: 3.9/4.0"
            },
            certifications: ["AWS Solutions Architect Professional", "Certified Kubernetes Administrator", "Google Cloud Professional Architect"],
            achievements: [
                "Tech Lead of the Year 2023",
                "Speaker at AWS re:Invent 2022",
                "Open source contributor with 2K+ GitHub stars",
                "Published 5 technical articles on Medium"
            ]
        }
    },
    
    // DevOps Role
    devOpsEngineer: {
        midLevel: {
            name: "Sarah Williams",
            title: "DevOps Engineer",
            summary: "DevOps engineer with 5 years of experience in cloud infrastructure, CI/CD pipelines, and automation. Skilled in AWS, Kubernetes, and infrastructure as code. Passionate about improving deployment efficiency and system reliability.",
            skills: ["AWS", "Kubernetes", "Docker", "Terraform", "Jenkins", "Ansible", "Python", "Bash Scripting", "CI/CD", "Monitoring"],
            experience: [
                {
                    title: "DevOps Engineer",
                    company: "CloudFirst Solutions",
                    location: "Austin, TX",
                    date: "March 2021 - Present",
                    description: [
                        "Implemented CI/CD pipelines reducing deployment time by 80%",
                        "Managed Kubernetes clusters hosting 50+ microservices",
                        "Automated infrastructure provisioning using Terraform",
                        "Reduced incident response time by 50% through monitoring improvements"
                    ]
                },
                {
                    title: "Systems Administrator",
                    company: "DataFlow Inc.",
                    location: "Denver, CO",
                    date: "August 2019 - February 2021",
                    description: [
                        "Managed on-premise infrastructure for 200+ servers",
                        "Implemented automated backup and disaster recovery solutions",
                        "Reduced system downtime by 40% through proactive monitoring",
                        "Migrated legacy systems to cloud infrastructure"
                    ]
                }
            ],
            projects: [
                {
                    title: "Infrastructure as Code Framework",
                    description: "Built reusable Terraform modules for consistent infrastructure deployment across multiple environments."
                },
                {
                    title: "Auto-scaling Solution",
                    description: "Implemented auto-scaling policies reducing infrastructure costs by 35% while maintaining 99.9% uptime."
                }
            ],
            education: {
                degree: "Bachelor of Science in Information Technology",
                school: "University of Texas at Austin",
                location: "Austin, TX",
                date: "Graduated May 2019",
                gpa: "GPA: 3.6/4.0"
            },
            certifications: ["AWS DevOps Engineer Professional", "Certified Kubernetes Administrator", "Terraform Associate"],
            achievements: [
                "Reduced deployment time from 2 hours to 15 minutes",
                "Achieved 99.95% uptime for critical services",
                "Implemented cost-saving measures saving $200K annually"
            ]
        }
    },
    
    // Data Science Role
    dataScientist: {
        senior: {
            name: "Emily Rodriguez",
            title: "Senior Data Scientist",
            summary: "Senior data scientist with 7 years of experience in machine learning, statistical modeling, and data engineering. Expert in building predictive models that drive business decisions. Strong background in deep learning, NLP, and big data technologies.",
            skills: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "SQL", "Spark", "AWS SageMaker", "Machine Learning", "Deep Learning", "NLP"],
            experience: [
                {
                    title: "Senior Data Scientist",
                    company: "AI Analytics Corp",
                    location: "Boston, MA",
                    date: "June 2020 - Present",
                    description: [
                        "Led development of recommendation system increasing user engagement by 45%",
                        "Built fraud detection model reducing false positives by 60%",
                        "Mentored team of 4 data scientists",
                        "Implemented MLOps pipeline for model deployment and monitoring"
                    ]
                },
                {
                    title: "Data Scientist",
                    company: "DataDriven Solutions",
                    location: "New York, NY",
                    date: "January 2018 - May 2020",
                    description: [
                        "Developed predictive models for customer churn prediction",
                        "Built natural language processing models for sentiment analysis",
                        "Created data pipelines processing 10TB+ daily",
                        "Collaborated with business teams to define analytics requirements"
                    ]
                }
            ],
            projects: [
                {
                    title: "Customer Lifetime Value Model",
                    description: "Built ML model predicting customer LTV with 92% accuracy, enabling targeted marketing strategies."
                },
                {
                    title: "Real-time Anomaly Detection",
                    description: "Developed real-time anomaly detection system for financial transactions processing 1M+ events/day."
                }
            ],
            education: {
                degree: "PhD in Computer Science (Machine Learning)",
                school: "MIT",
                location: "Cambridge, MA",
                date: "Graduated December 2017",
                gpa: "GPA: 4.0/4.0"
            },
            certifications: ["AWS Machine Learning Specialty", "Google Professional Data Engineer", "TensorFlow Developer Certificate"],
            achievements: [
                "Published 8 research papers in top ML conferences",
                "Patent holder for anomaly detection algorithm",
                "Keynote speaker at Data Science Summit 2023"
            ]
        }
    },
    
    // Cybersecurity Role
    cybersecurityAnalyst: {
        midLevel: {
            name: "David Kim",
            title: "Cybersecurity Analyst",
            summary: "Cybersecurity analyst with 4 years of experience in threat detection, incident response, and security compliance. Skilled in penetration testing, vulnerability assessment, and security monitoring. Committed to protecting organizational assets and ensuring regulatory compliance.",
            skills: ["Penetration Testing", "SIEM", "Incident Response", "Vulnerability Assessment", "Network Security", "Compliance", "Python", "Burp Suite", "Metasploit", "Risk Assessment"],
            experience: [
                {
                    title: "Cybersecurity Analyst",
                    company: "SecureNet Solutions",
                    location: "Washington, DC",
                    date: "September 2021 - Present",
                    description: [
                        "Conducted penetration tests on 50+ applications identifying 200+ vulnerabilities",
                        "Led incident response team reducing average response time by 40%",
                        "Implemented security monitoring using SIEM tools",
                        "Achieved SOC 2 Type II compliance for the organization"
                    ]
                },
                {
                    title: "Security Analyst",
                    company: "Guardian Security",
                    location: "Chicago, IL",
                    date: "July 2019 - August 2021",
                    description: [
                        "Performed vulnerability assessments on network infrastructure",
                        "Developed security policies and procedures",
                        "Conducted security awareness training for 500+ employees",
                        "Managed security incident response procedures"
                    ]
                }
            ],
            projects: [
                {
                    title: "Security Automation Framework",
                    description: "Built automated vulnerability scanning and reporting system reducing manual effort by 70%."
                },
                {
                    title: "Threat Intelligence Platform",
                    description: "Implemented threat intelligence feed integration improving threat detection by 50%."
                }
            ],
            education: {
                degree: "Bachelor of Science in Cybersecurity",
                school: "University of Maryland",
                location: "College Park, MD",
                date: "Graduated May 2019",
                gpa: "GPA: 3.8/4.0"
            },
            certifications: ["CISSP", "CEH", "CompTIA Security+", "AWS Security Specialty"],
            achievements: [
                "Identified critical vulnerability preventing potential $1M breach",
                "Security Team Lead of the Quarter Q4 2023",
                "Implemented security controls achieving 100% audit compliance"
            ]
        }
    },
    
    // Project Manager Role
    projectManager: {
        senior: {
            name: "Jennifer Martinez",
            title: "Senior Project Manager",
            summary: "Senior project manager with 10+ years of experience leading complex technology projects. Expert in Agile methodologies, stakeholder management, and cross-functional team leadership. Proven track record of delivering projects on time and within budget while exceeding quality expectations.",
            skills: ["Agile/Scrum", "Project Management", "Stakeholder Management", "Risk Management", "Budget Management", "JIRA", "Confluence", "Communication", "Team Leadership", "Strategic Planning"],
            experience: [
                {
                    title: "Senior Project Manager",
                    company: "TechVentures Inc.",
                    location: "Los Angeles, CA",
                    date: "January 2019 - Present",
                    description: [
                        "Led $5M digital transformation project delivered 3 months ahead of schedule",
                        "Managed cross-functional teams of 25+ members across 3 time zones",
                        "Implemented Agile practices increasing team velocity by 60%",
                        "Reduced project delivery costs by 20% through process optimization"
                    ]
                },
                {
                    title: "Project Manager",
                    company: "Innovation Labs",
                    location: "San Jose, CA",
                    date: "March 2015 - December 2018",
                    description: [
                        "Managed portfolio of 15 concurrent projects with total budget of $8M",
                        "Achieved 95% on-time delivery rate across all projects",
                        "Developed project management framework adopted company-wide",
                        "Mentored 5 junior project managers"
                    ]
                }
            ],
            projects: [
                {
                    title: "Enterprise Resource Planning Implementation",
                    description: "Led ERP implementation across 5 business units affecting 2,000 users, completed under budget with 98% user adoption."
                },
                {
                    title: "Mobile App Development Program",
                    description: "Managed development of 3 mobile applications with 2M+ downloads and 4.8-star average rating."
                }
            ],
            education: {
                degree: "MBA in Project Management",
                school: "Wharton School, University of Pennsylvania",
                location: "Philadelphia, PA",
                date: "Graduated May 2015",
                gpa: "GPA: 3.9/4.0"
            },
            certifications: ["PMP", "CSM", "PRINCE2 Practitioner", "SAFe Agilist"],
            achievements: [
                "Project Manager of the Year 2022",
                "Successfully delivered 50+ projects with 95% success rate",
                "Published article on Agile project management best practices"
            ]
        }
    },
    
    // Business Analyst Role
    businessAnalyst: {
        junior: {
            name: "Ryan Thompson",
            title: "Junior Business Analyst",
            summary: "Detail-oriented business analyst with 2 years of experience in requirements gathering, process improvement, and data analysis. Skilled in stakeholder communication, documentation, and using analytical tools to drive business decisions.",
            skills: ["Requirements Gathering", "Process Mapping", "Data Analysis", "SQL", "Excel", "Tableau", "JIRA", "User Stories", "Stakeholder Management", "Documentation"],
            experience: [
                {
                    title: "Junior Business Analyst",
                    company: "Business Solutions Inc.",
                    location: "Atlanta, GA",
                    date: "August 2022 - Present",
                    description: [
                        "Gathered and documented requirements for 10+ software projects",
                        "Created process maps identifying 30% efficiency improvements",
                        "Conducted user acceptance testing with 95% pass rate",
                        "Developed dashboards providing real-time business insights"
                    ]
                },
                {
                    title: "Business Analyst Intern",
                    company: "Strategic Consulting",
                    location: "Charlotte, NC",
                    date: "May 2021 - July 2022",
                    description: [
                        "Analyzed business processes and recommended improvements",
                        "Created requirement documents for client projects",
                        "Assisted in data analysis for strategic initiatives",
                        "Supported stakeholder meetings and workshops"
                    ]
                }
            ],
            projects: [
                {
                    title: "Sales Process Optimization",
                    description: "Analyzed sales process identifying bottlenecks and implemented changes increasing conversion by 25%."
                },
                {
                    title: "Customer Feedback Analysis",
                    description: "Developed customer feedback analysis system improving product roadmap decisions."
                }
            ],
            education: {
                degree: "Bachelor of Science in Business Administration",
                school: "University of Georgia",
                location: "Athens, GA",
                date: "Graduated May 2022",
                gpa: "GPA: 3.7/4.0"
            },
            certifications: ["CBAP (In Progress)", "Tableau Desktop Specialist", "Google Analytics Certified"],
            achievements: [
                "Employee of the Month - March 2023",
                "Process improvement initiative saved $50K annually",
                "Certified in Agile methodologies"
            ]
        }
    },
    
    // HR Role
    hrManager: {
        midLevel: {
            name: "Amanda Foster",
            title: "HR Manager",
            summary: "HR manager with 6 years of experience in talent acquisition, employee relations, and organizational development. Passionate about creating positive work environments and developing talent. Strong background in HR analytics and strategic HR planning.",
            skills: ["Talent Acquisition", "Employee Relations", "Performance Management", "HR Analytics", "Recruitment", "Onboarding", "Compliance", "Training & Development", "Strategic Planning", "Communication"],
            experience: [
                {
                    title: "HR Manager",
                    company: "GrowthTech Solutions",
                    location: "Phoenix, AZ",
                    date: "April 2020 - Present",
                    description: [
                        "Reduced time-to-hire by 40% through recruitment process optimization",
                        "Implemented employee engagement program increasing retention by 25%",
                        "Managed HR operations for 500+ employees",
                        "Developed and implemented performance management system"
                    ]
                },
                {
                    title: "HR Generalist",
                    company: "PeopleFirst Inc.",
                    location: "Denver, CO",
                    date: "June 2017 - March 2020",
                    description: [
                        "Managed full-cycle recruitment for technical and non-technical roles",
                        "Conducted employee relations investigations and conflict resolution",
                        "Administered benefits and compensation programs",
                        "Coordinated training and development programs"
                    ]
                }
            ],
            projects: [
                {
                    title: "HR Analytics Dashboard",
                    description: "Built comprehensive HR analytics dashboard providing insights into recruitment, retention, and employee performance."
                },
                {
                    title: "Onboarding Program Redesign",
                    description: "Redesigned onboarding program increasing new hire productivity by 30% and satisfaction by 40%."
                }
            ],
            education: {
                degree: "Master of Science in Human Resource Management",
                school: "University of Southern California",
                location: "Los Angeles, CA",
                date: "Graduated May 2017",
                gpa: "GPA: 3.8/4.0"
            },
            certifications: ["SHRM-SCP", "PHR", "Certified Professional Coach"],
            achievements: [
                "HR Excellence Award 2023",
                "Reduced turnover rate from 18% to 12%",
                "Implemented diversity and inclusion initiative increasing diverse hires by 35%"
            ]
        }
    },
    
    // Finance Role
    financialAnalyst: {
        senior: {
            name: "Christopher Lee",
            title: "Senior Financial Analyst",
            summary: "Senior financial analyst with 9 years of experience in financial planning, analysis, and modeling. Expert in budget management, forecasting, and strategic financial analysis. Strong background in investment analysis and risk assessment.",
            skills: ["Financial Modeling", "Budgeting", "Forecasting", "Excel", "Financial Analysis", "Investment Analysis", "Risk Assessment", "SQL", "Tableau", "Strategic Planning"],
            experience: [
                {
                    title: "Senior Financial Analyst",
                    company: "Capital Partners LLC",
                    location: "New York, NY",
                    date: "February 2019 - Present",
                    description: [
                        "Managed $50M budget with 98% accuracy in forecasting",
                        "Developed financial models supporting $200M in investment decisions",
                        "Led financial planning process across 5 business units",
                        "Implemented automated reporting reducing manual work by 70%"
                    ]
                },
                {
                    title: "Financial Analyst",
                    company: "Investment Strategies Inc.",
                    location: "Boston, MA",
                    date: "July 2015 - January 2019",
                    description: [
                        "Conducted investment analysis for portfolio management",
                        "Built financial models for M&A transactions",
                        "Performed variance analysis and budget tracking",
                        "Supported senior management in strategic decisions"
                    ]
                }
            ],
            projects: [
                {
                    title: "Financial Planning System",
                    description: "Led implementation of new financial planning system improving forecast accuracy by 30%."
                },
                {
                    title: "Investment Portfolio Analysis",
                    description: "Developed portfolio analysis framework optimizing asset allocation and reducing risk by 25%."
                }
            ],
            education: {
                degree: "MBA in Finance",
                school: "Columbia Business School",
                location: "New York, NY",
                date: "Graduated May 2015",
                gpa: "GPA: 3.9/4.0"
            },
            certifications: ["CFA Level III", "CPA", "FMVA"],
            achievements: [
                "Finance Team Lead of the Year 2022",
                "Identified $5M in cost savings through process optimization",
                "Published research on investment strategies"
            ]
        }
    },
    
    // Sales Role
    salesManager: {
        midLevel: {
            name: "Brandon Scott",
            title: "Sales Manager",
            summary: "Sales manager with 5 years of experience in B2B sales, team leadership, and revenue growth. Proven track record of exceeding sales targets and building high-performing sales teams. Expert in consultative selling, CRM management, and strategic account planning.",
            skills: ["B2B Sales", "Team Leadership", "Revenue Growth", "CRM Management", "Strategic Account Planning", "Negotiation", "Sales Forecasting", "Consultative Selling", "Relationship Building", "Pipeline Management"],
            experience: [
                {
                    title: "Sales Manager",
                    company: "SalesForce Pro",
                    location: "Chicago, IL",
                    date: "March 2021 - Present",
                    description: [
                        "Led team of 8 sales representatives exceeding annual target by 25%",
                        "Grew territory revenue from $2M to $5M in 3 years",
                        "Implemented sales training program increasing team productivity by 40%",
                        "Developed key account strategy winning 3 major enterprise deals"
                    ]
                },
                {
                    title: "Senior Sales Representative",
                    company: "TechSolutions Inc.",
                    location: "Dallas, TX",
                    date: "June 2018 - February 2021",
                    description: [
                        "Consistently exceeded sales targets by 30%+ annually",
                        "Closed $3M in new business over 3 years",
                        "Developed strong relationships with key decision makers",
                        "Mentored 2 junior sales representatives"
                    ]
                }
            ],
            projects: [
                {
                    title: "Sales Process Optimization",
                    description: "Redesigned sales process reducing sales cycle by 35% and increasing conversion rate by 20%."
                },
                {
                    title: "Enterprise Account Strategy",
                    description: "Developed enterprise account strategy resulting in $1.5M contract with Fortune 500 company."
                }
            ],
            education: {
                degree: "Bachelor of Business Administration in Marketing",
                school: "University of Texas at Austin",
                location: "Austin, TX",
                date: "Graduated May 2018",
                gpa: "GPA: 3.6/4.0"
            },
            certifications: ["Certified Professional Sales Person (CPSP)", "Salesforce Administrator", "HubSpot Sales Software"],
            achievements: [
                "Sales Manager of the Year 2023",
                "President's Club Winner 2020, 2021, 2022",
                "Top revenue growth in region for 3 consecutive years"
            ]
        }
    },
    
    // Marketing Role
    marketingManager: {
        senior: {
            name: "Jessica Adams",
            title: "Senior Marketing Manager",
            summary: "Senior marketing manager with 8 years of experience in digital marketing, brand management, and marketing strategy. Expert in driving customer acquisition, brand awareness, and revenue growth through data-driven marketing initiatives.",
            skills: ["Digital Marketing", "Brand Management", "Marketing Strategy", "SEO/SEM", "Social Media Marketing", "Content Marketing", "Analytics", "Email Marketing", "Campaign Management", "Budget Management"],
            experience: [
                {
                    title: "Senior Marketing Manager",
                    company: "BrandVision Inc.",
                    location: "Los Angeles, CA",
                    date: "January 2020 - Present",
                    description: [
                        "Led digital marketing strategy increasing website traffic by 150%",
                        "Managed $2M annual marketing budget with 40% ROI",
                        "Developed brand campaign increasing brand awareness by 60%",
                        "Built marketing team from 3 to 12 members"
                    ]
                },
                {
                    title: "Marketing Manager",
                    company: "GrowthHackers Agency",
                    location: "San Francisco, CA",
                    date: "March 2016 - December 2019",
                    description: [
                        "Managed integrated marketing campaigns for 20+ clients",
                        "Achieved average 300% ROI on client marketing investments",
                        "Developed content strategy increasing organic traffic by 200%",
                        "Led cross-functional marketing initiatives"
                    ]
                }
            ],
            projects: [
                {
                    title: "Brand Relaunch Campaign",
                    description: "Led complete brand relaunch resulting in 80% increase in brand recognition and 45% increase in customer acquisition."
                },
                {
                    title: "Marketing Automation Platform",
                    description: "Implemented marketing automation increasing lead conversion by 50% and reducing manual work by 60%."
                }
            ],
            education: {
                degree: "Master of Business Administration in Marketing",
                school: "Kellogg School of Management, Northwestern University",
                location: "Evanston, IL",
                date: "Graduated June 2016",
                gpa: "GPA: 3.8/4.0"
            },
            certifications: ["Google Ads Certified", "Facebook Blueprint Certified", "HubSpot Inbound Marketing"],
            achievements: [
                "Marketing Excellence Award 2023",
                "Campaign of the Year - Digital Marketing Association 2022",
                "Published articles on marketing strategy in industry publications"
            ]
        }
    },
    
    // Healthcare Role
    healthcareAdministrator: {
        midLevel: {
            name: "Michelle Brown",
            title: "Healthcare Administrator",
            summary: "Healthcare administrator with 6 years of experience in hospital operations, quality improvement, and regulatory compliance. Dedicated to improving patient care through efficient operations and evidence-based practices. Strong background in healthcare finance and staff management.",
            skills: ["Healthcare Operations", "Quality Improvement", "Regulatory Compliance", "Healthcare Finance", "Staff Management", "Patient Safety", "Strategic Planning", "Electronic Health Records", "Budget Management", "Process Improvement"],
            experience: [
                {
                    title: "Healthcare Administrator",
                    company: "Metro Regional Hospital",
                    location: "Houston, TX",
                    date: "August 2019 - Present",
                    description: [
                        "Managed daily operations of 200-bed hospital department",
                        "Reduced patient wait times by 35% through process optimization",
                        "Achieved 98% patient satisfaction scores",
                        "Led quality improvement initiatives reducing readmission rates by 20%"
                    ]
                },
                {
                    title: "Assistant Healthcare Administrator",
                    company: "Community Health Center",
                    location: "Austin, TX",
                    date: "June 2016 - July 2019",
                    description: [
                        "Assisted in managing clinic operations for 50+ providers",
                        "Implemented electronic health records system",
                        "Coordinated regulatory compliance activities",
                        "Managed departmental budgets and resource allocation"
                    ]
                }
            ],
            projects: [
                {
                    title: "Patient Flow Optimization",
                    description: "Led patient flow optimization project reducing length of stay by 15% and increasing capacity by 20%."
                },
                {
                    title: "Quality Improvement Initiative",
                    description: "Implemented quality improvement program reducing hospital-acquired infections by 40%."
                }
            ],
            education: {
                degree: "Master of Health Administration",
                school: "University of Texas Health Science Center",
                location: "Houston, TX",
                date: "Graduated May 2016",
                gpa: "GPA: 3.9/4.0"
            },
            certifications: ["FACHE", "CPHQ", "Lean Six Sigma Green Belt"],
            achievements: [
                "Administrator of the Year 2022",
                "Achieved Joint Commission accreditation with no deficiencies",
                "Implemented cost-saving initiatives saving $1.5M annually"
            ]
        }
    },
    
    // Education Role
    educationAdministrator: {
        senior: {
            name: "Dr. Robert Wilson",
            title: "Director of Academic Affairs",
            summary: "Education administrator with 12 years of experience in higher education leadership, curriculum development, and academic program management. Committed to educational excellence and student success. Expert in accreditation, faculty development, and strategic academic planning.",
            skills: ["Academic Leadership", "Curriculum Development", "Accreditation", "Faculty Development", "Strategic Planning", "Budget Management", "Student Success Initiatives", "Program Assessment", "Educational Technology", "Grant Writing"],
            experience: [
                {
                    title: "Director of Academic Affairs",
                    company: "State University",
                    location: "Columbus, OH",
                    date: "July 2018 - Present",
                    description: [
                        "Led academic programs serving 15,000 students across 8 colleges",
                        "Developed new academic programs increasing enrollment by 25%",
                        "Achieved successful regional accreditation renewal",
                        "Implemented faculty development program improving teaching effectiveness"
                    ]
                },
                {
                    title: "Associate Dean",
                    company: "Metropolitan College",
                    location: "Philadelphia, PA",
                    date: "September 2012 - June 2018",
                    description: [
                        "Managed academic operations for 5 academic departments",
                        "Led curriculum revision for 20+ degree programs",
                        "Coordinated assessment activities for accreditation",
                        "Developed online learning initiatives"
                    ]
                }
            ],
            projects: [
                {
                    title: "Online Program Expansion",
                    description: "Led expansion of online programs from 5 to 25 programs, increasing online enrollment by 300%."
                },
                {
                    title: "Student Success Initiative",
                    description: "Implemented comprehensive student success program improving retention rates by 20% and graduation rates by 15%."
                }
            ],
            education: {
                degree: "PhD in Higher Education Administration",
                school: "University of Pennsylvania",
                location: "Philadelphia, PA",
                date: "Graduated May 2012",
                gpa: "GPA: 4.0/4.0"
            },
            certifications: ["Higher Education Teaching Certificate", "Online Learning Consortium Certificate"],
            achievements: [
                "Academic Leader of the Year 2023",
                "Secured $5M in grant funding for academic programs",
                "Published research on student success in higher education"
            ]
        }
    },
    
    // Operations Role
    operationsManager: {
        midLevel: {
            name: "Kevin Murphy",
            title: "Operations Manager",
            summary: "Operations manager with 5 years of experience in supply chain management, process optimization, and team leadership. Expert in improving operational efficiency, reducing costs, and implementing quality management systems. Strong background in lean manufacturing and continuous improvement.",
            skills: ["Operations Management", "Supply Chain", "Process Optimization", "Lean Manufacturing", "Quality Management", "Inventory Management", "Team Leadership", "Budget Management", "Vendor Management", "Continuous Improvement"],
            experience: [
                {
                    title: "Operations Manager",
                    company: "Manufacturing Excellence Corp",
                    location: "Detroit, MI",
                    date: "April 2020 - Present",
                    description: [
                        "Managed operations for manufacturing facility with 200+ employees",
                        "Reduced production costs by 25% through process optimization",
                        "Implemented lean manufacturing principles improving efficiency by 40%",
                        "Achieved 99.5% on-time delivery rate"
                    ]
                },
                {
                    title: "Operations Supervisor",
                    company: "Precision Manufacturing",
                    location: "Cleveland, OH",
                    date: "June 2017 - March 2020",
                    description: [
                        "Supervised production team of 50+ employees",
                        "Implemented quality control system reducing defects by 60%",
                        "Managed inventory levels reducing carrying costs by 30%",
                        "Trained team on safety and operational procedures"
                    ]
                }
            ],
            projects: [
                {
                    title: "Supply Chain Optimization",
                    description: "Led supply chain optimization project reducing lead times by 50% and inventory costs by 35%."
                },
                {
                    title: "Quality Management System",
                    description: "Implemented comprehensive quality management system achieving ISO 9001 certification."
                }
            ],
            education: {
                degree: "Master of Science in Operations Management",
                school: "University of Michigan",
                location: "Ann Arbor, MI",
                date: "Graduated May 2017",
                gpa: "GPA: 3.7/4.0"
            },
            certifications: ["Six Sigma Black Belt", "APICS CPIM", "Lean Manufacturing Certified"],
            achievements: [
                "Operations Manager of the Year 2023",
                "Reduced operational costs by $2M annually",
                "Achieved 100% safety record for 3 consecutive years"
            ]
        }
    }
};

// Layout configurations
const layoutStyles = {
    ats: {
        name: "ATS-Friendly",
        description: "Clean, simple layout optimized for applicant tracking systems",
        features: ["No graphics", "Standard fonts", "Simple formatting", "Keyword-optimized"]
    },
    modern: {
        name: "Modern Professional",
        description: "Contemporary design with clean lines and professional appearance",
        features: ["Modern typography", "Subtle colors", "Clean layout", "Professional header"]
    },
    executive: {
        name: "Executive",
        description: "Sophisticated design for senior-level professionals",
        features: ["Premium styling", "Elegant typography", "Executive focus", "Achievement highlights"]
    },
    twoColumn: {
        name: "Two-Column",
        description: "Efficient two-column layout maximizing space utilization",
        features: ["Side column for skills", "Main content area", "Space-efficient", "Easy to scan"]
    },
    creative: {
        name: "Creative",
        description: "Eye-catching design for creative and marketing roles",
        features: ["Colorful accents", "Modern design", "Visual elements", "Unique layout"]
    },
    minimal: {
        name: "Minimal",
        description: "Clean, minimalist design focusing on content",
        features: ["Minimal styling", "Focus on content", "Clean typography", "Professional appearance"]
    }
};

// Experience levels
const experienceLevels = [
    { level: "fresher", label: "Fresher", description: "Entry-level candidates with 0-2 years experience" },
    { level: "junior", label: "Junior", description: "Early-career professionals with 2-4 years experience" },
    { level: "midLevel", label: "Mid-Level", description: "Experienced professionals with 4-7 years experience" },
    { level: "senior", label: "Senior", description: "Senior professionals with 7-10 years experience" },
    { level: "lead", label: "Lead", description: "Team leads with 10-12 years experience" },
    { level: "manager", label: "Manager", description: "Managers with 12-15 years experience" },
    { level: "director", label: "Director", description: "Directors with 15+ years experience" },
    { level: "executive", label: "Executive", description: "C-level executives with 20+ years experience" }
];

// Role categories
const roleCategories = {
    it: {
        name: "IT & Software",
        roles: ["Software Engineer", "Cloud Architect", "DevOps Engineer", "System Administrator", "Network Engineer"]
    },
    data: {
        name: "Data & Analytics",
        roles: ["Data Scientist", "Data Analyst", "Machine Learning Engineer", "Business Intelligence Analyst"]
    },
    cybersecurity: {
        name: "Cybersecurity",
        roles: ["Cybersecurity Analyst", "Security Engineer", "Penetration Tester", "Security Architect"]
    },
    qa: {
        name: "Quality Assurance",
        roles: ["QA Engineer", "Test Automation Engineer", "Quality Manager", "Manual Tester"]
    },
    business: {
        name: "Business & Finance",
        roles: ["Business Analyst", "Financial Analyst", "Product Manager", "Project Manager"]
    },
    hr: {
        name: "Human Resources",
        roles: ["HR Manager", "Recruiter", "HR Business Partner", "Training Manager"]
    },
    sales: {
        name: "Sales & Marketing",
        roles: ["Sales Manager", "Marketing Manager", "Business Development", "Account Manager"]
    },
    engineering: {
        name: "Engineering",
        roles: ["Mechanical Engineer", "Civil Engineer", "Electrical Engineer", "Chemical Engineer"]
    },
    healthcare: {
        name: "Healthcare",
        roles: ["Healthcare Administrator", "Nurse Manager", "Medical Administrator", "Healthcare Consultant"]
    },
    education: {
        name: "Education",
        roles: ["Education Administrator", "Academic Director", "Curriculum Developer", "School Principal"]
    },
    operations: {
        name: "Operations",
        roles: ["Operations Manager", "Supply Chain Manager", "Logistics Manager", "Production Manager"]
    }
};
