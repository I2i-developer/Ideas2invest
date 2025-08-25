"use client";
import styles from "./StrategicPlanningProcess.module.css";
import Image from "next/image";

const steps = [
    {
        number: "1",
        title: "Assessment & Discovery",
        description: "We analyze your current financial landscape, goals, and risk profile to lay the groundwork for a tailored plan.",
        icon: "/icons/assessment.png",
    },
    {
        number: "2",
        title: "Goal Setting",
        description: "Define clear financial objectives aligned with your life aspirations and investment capabilities.",
        icon: "/icons/goal.png",
    },
    {
        number: "3",
        title: "Strategy Development",
        description: "We build a diversified portfolio strategy incorporating tax efficiency, risk mitigation, and growth potential.",
        icon: "/icons/strategy.png",
    },
    {
        number: "4",
        title: "Implementation",
        description: "Your plan is put into action using proven tools and transparent investment tracking.",
        icon: "/icons/implementation.png",
    },
    {
        number: "5",
        title: "Ongoing Review",
        description: "We continuously adjust your plan to align with market conditions and life changes.",
        icon: "/icons/review.png",
    },
];

const StrategicPlanningProcessSection = () => {
    return (
        <section className={styles.section}>
            <h2 className={styles.heading}>Strategic Planning Process</h2>
            <p className={styles.subheading}>Our clear, goal-driven approach to financial success</p>

            <div className={styles.stepsRow}>
                {steps.map((step, index) => (
                    <div className={styles.stepCard} key={index}>
                        <div className={styles.bubble}><span>{step.number}</span></div>
                        <div className={styles.icon}>
                            <Image src={step.icon} alt={step.title} width={50} height={50} />
                        </div>
                        <h4 className={styles.title}>{step.title}</h4>
                        <p className={styles.description}>{step.description}</p>

                        {index !== steps.length - 1 && (
                            <div className={styles.curveConnector}>
                                <svg viewBox="0 0 100 100" preserveAspectRatio="none">
                                    <defs>
                                        <marker
                                            id="arrowhead"
                                            markerWidth="8"
                                            markerHeight="8"
                                            refX="5"
                                            refY="5"
                                            orient="auto"
                                        >
                                            <polygon points="0 0, 10 5, 0 10" fill="var(--color-secondary)" />
                                        </marker>
                                    </defs>
                                    <path d="M0,50 C30,0 70,100 100,50" />
                                </svg>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default StrategicPlanningProcessSection;
