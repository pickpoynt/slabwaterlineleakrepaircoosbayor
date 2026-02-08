import { AlertOctagon, CheckSquare, Crosshair, Sprout, Hammer, Activity } from "lucide-react";

const infoData = [
    {
        icon: Sprout,
        title: "St. Louis Root Intrusion",
        description: "In older St. Louis neighborhoods like Tower Grove and South City, century-old trees have roots that thrive in the moisture of clay pipe joints, eventually shattering the brittle tile.",
    },
    {
        icon: AlertOctagon,
        title: "Shifting STL Soil",
        description: "St. Louis's clay-rich soil expands and contracts with the seasons, causing brittle clay sewer sections to shift (offset), creating lips that snag debris and lead to total backups.",
    },
    {
        icon: Activity,
        title: "Trenchless STL Tech",
        description: "We protect your historic St. Louis landscaping. Our trenchless pipe bursting and lining methods replace your sewer line without digging up your yard or driveway.",
    },
];

const benefitsData = [
    "Prevents catastrophic sewage backups",
    "Eliminates recurring root growth",
    "Restores optimal drainage flow",
    "Increases historic home value",
    "Preserves original St. Louis landscaping",
    "Lifetime copper & PEX performance",
];

const ClayPipeInfo = () => {
    return (
        <section id="clay-pipe-info" className="py-24 bg-gradient-hero">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-2 bg-copper/20 border border-copper/30 rounded-full text-copper-light text-sm font-semibold mb-4">
                        St. Louis Underground Experts
                    </span>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
                        Why St. Louis Clay Pipes Fail
                    </h2>
                    <p className="text-primary-foreground/80 text-lg">
                        Vitrified clay was the standard for decades in St. Louis, but it's brittle and prone to structural failure. Understanding the weaknesses
                        of your STL home's sewer is the first step to a permanent, trenchless solution.
                    </p>
                </div>

                {/* Info Cards */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {infoData.map((info, index) => (
                        <div
                            key={index}
                            className="bg-card rounded-xl p-8 shadow-lg border border-border hover:border-copper/30 transition-all duration-300"
                        >
                            <div className="w-14 h-14 rounded-xl bg-gradient-hero flex items-center justify-center mb-6">
                                <info.icon className="w-7 h-7 text-copper" />
                            </div>
                            <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                                {info.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {info.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Two Column Content */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="bg-card rounded-2xl p-8 lg:p-10 shadow-xl border border-border">
                        <div className="flex items-center gap-3 mb-6">
                            <Crosshair className="w-8 h-8 text-copper" />
                            <h3 className="text-2xl font-heading font-bold text-foreground">
                                High-Def Video Diagnostics
                            </h3>
                        </div>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                            We assume nothing. Every St. Louis sewer project begins with a high-definition fiber-optic camera inspection.
                            We identify if the problem is a simple joint leak, massive root intrusion, or a fully collapsed line.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            This precision diagnosis allows us to recommend the exact trenchless treatment your St. Louis sewer needs,
                            preventing unnecessary digging and saving you thousands.
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 lg:p-10 shadow-xl">
                        <h3 className="text-2xl font-heading font-bold text-primary-foreground mb-6">
                            Benefits of Sewer Rehabilitation
                        </h3>
                        <ul className="space-y-4">
                            {benefitsData.map((benefit, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <CheckSquare className="w-6 h-6 text-copper flex-shrink-0 mt-0.5" />
                                    <span className="text-primary-foreground/90 text-lg">
                                        {benefit}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                    <div className="inline-flex items-center gap-4 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-8 py-4">
                        <Hammer className="w-6 h-6 text-copper" />
                        <span className="text-primary-foreground font-medium text-lg">
                            Protect your St. Louis property today. Call (877) 792-1410.
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClayPipeInfo;



