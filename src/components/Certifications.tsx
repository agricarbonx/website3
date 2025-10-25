import { useEffect, useRef, useState } from 'react';
import { Award, CheckCircle, Shield, Globe, Sparkles, Building2, FileText, Users } from 'lucide-react';

export default function Certifications() {
  const [isVisible, setIsVisible] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [selectedCert, setSelectedCert] = useState('');
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleRequestDocs = (certName: string) => {
    setSelectedCert(certName);
    setShowContactModal(true);
  };

  const certifications = [
    { name: 'Verra (VCS)', status: 'Pursuing', statusColor: 'orange', icon: CheckCircle },
    { name: 'Gold Standard', status: 'Alignment Reviewed', statusColor: 'violet', icon: Award },
    { name: 'ISO 14064-1', status: 'Alignment in Progress', statusColor: 'orange', icon: Shield },
    { name: 'ISO 14001', status: 'Policy & Processes Aligning', statusColor: 'violet', icon: Shield },
    { name: 'PAS 2060', status: 'Targeted', statusColor: 'neon', icon: FileText },
  ];

  const activePartners = [
    {
      name: 'En-Cure Farms',
      description: 'Field trials & implementation',
      status: 'Active partner — pilot sites',
      icon: Sparkles
    },
    {
      name: 'Hasiru Mitra',
      description: 'Community engagement & farmer mobilization',
      status: 'Active partner',
      icon: Users
    },
    {
      name: 'AgriVentures India',
      description: 'Aggregation & supply chain integration',
      status: 'Active partner',
      icon: Building2
    },
  ];

  const targetCollaborators = [
    'Research partners (ICRISAT / IARI / local universities) — Target / MoU stage',
    'Corporate offtakers (FMCG / Food & Beverage) — Target / Outreach',
    'Third-party verifiers & auditors — Target / In discussion'
  ];

  return (
    <>
      <section id="certifications" className="relative py-32 gradient-bg overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-violet/5 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-orange/5 rounded-full blur-[150px]"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 glass-card px-5 py-2 rounded-full mb-6">
              <Shield className="w-4 h-4 text-neon" strokeWidth={2.5} />
              <span className="text-sm font-semibold text-neon uppercase tracking-wider">Standards & Partners</span>
            </div>

            <h2 className="text-5xl md:text-7xl font-heading font-black text-light mb-6 tracking-tight">
              Certifications & Standards — <br />
              <span className="gradient-text">Pursuing & In Progress</span>
            </h2>
          </div>

          <div className="glass-strong p-8 rounded-3xl mb-16 border border-neon/20 max-w-5xl mx-auto">
            <p className="text-light/80 leading-relaxed text-center">
              AgriCarbonX actively aligns our methodologies and projects with internationally recognized carbon standards. The logos below indicate standards we are currently pursuing, piloting, or aligning with. We do not represent any award of certification until supporting audit reports or certificates are uploaded. Contact us for verification documents.
            </p>
          </div>

          <div className="mb-24">
            <h3 className="text-3xl font-heading font-bold text-light text-center mb-12">
              Global Certifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {certifications.map((cert, index) => {
                const Icon = cert.icon;
                return (
                  <div
                    key={index}
                    className={`group perspective-card glass-card p-8 rounded-3xl transform transition-all duration-700 hover:scale-105 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-6">
                        <Icon className="w-12 h-12 text-neon icon-glow-neon" strokeWidth={2} />
                        <span className={`px-3 py-1 text-xs font-semibold rounded-full bg-${cert.statusColor}/10 text-${cert.statusColor} border border-${cert.statusColor}/30`}>
                          {cert.status}
                        </span>
                      </div>
                      <h4 className="text-xl font-heading font-bold text-light mb-4">{cert.name}</h4>
                      <button
                        onClick={() => handleRequestDocs(cert.name)}
                        className="text-sm text-neon hover:text-light transition-colors underline"
                      >
                        Request supporting docs
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 text-center">
              <p className="text-xs text-light/50 max-w-3xl mx-auto">
                Note: Certification statuses are accurate as of publishing. We will update with audit reports and certificates once fully awarded.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-3xl font-heading font-bold text-light text-center mb-8">
              Strategic Partners & Field Network
            </h3>
            <p className="text-light/70 text-center mb-12 max-w-3xl mx-auto">
              Trusted operational and community partners enable our pilot projects and field scale-up. Logos shown where permissions are confirmed; otherwise text cards are used.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {activePartners.map((partner, index) => {
                const Icon = partner.icon;
                return (
                  <div
                    key={index}
                    className={`group perspective-card glass-card p-8 rounded-3xl transform transition-all duration-700 hover:scale-105 ${
                      isVisible ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{ transitionDelay: `${(index + 5) * 100}ms` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-neon/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

                    <div className="relative z-10">
                      <div className="p-4 rounded-2xl bg-neon/10 inline-flex mb-6">
                        <Icon className="w-8 h-8 text-neon icon-glow-neon" strokeWidth={2} />
                      </div>
                      <h4 className="text-xl font-heading font-bold text-light mb-2">{partner.name}</h4>
                      <p className="text-sm text-light/70 mb-3">{partner.description}</p>
                      <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-green-500/10 text-green-400 border border-green-500/30">
                        {partner.status}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="glass-strong p-8 rounded-3xl border border-violet/20">
              <h4 className="text-2xl font-heading font-bold text-light mb-6 text-center">
                Target Collaborators <span className="text-violet">(engagement ongoing)</span>
              </h4>
              <div className="space-y-4">
                {targetCollaborators.map((collab, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 glass-card rounded-xl">
                    <Globe className="w-6 h-6 text-violet flex-shrink-0" strokeWidth={2} />
                    <span className="text-light/80 text-sm">{collab}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-xs text-light/50 max-w-3xl mx-auto">
                Logos used only with explicit permission. If permission is pending, the partner is listed as text and status is indicated.
              </p>
            </div>
          </div>
        </div>
      </section>

      {showContactModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-deep/90 backdrop-blur-sm" onClick={() => setShowContactModal(false)}>
          <div className="glass-strong p-8 rounded-3xl max-w-md w-full border-2 border-neon/30" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-2xl font-heading font-bold text-light mb-4">Request Documentation</h3>
            <p className="text-light/70 mb-6">
              To request supporting documents for <span className="text-neon font-semibold">{selectedCert}</span>, please contact us:
            </p>
            <div className="space-y-4 mb-6">
              <div className="glass-card p-4 rounded-xl">
                <p className="text-sm text-light/60 mb-1">Email</p>
                <a href="mailto:info@agricarbonx.com" className="text-neon font-semibold hover:underline">
                  info@agricarbonx.com
                </a>
              </div>
              <div className="glass-card p-4 rounded-xl">
                <p className="text-sm text-light/60 mb-1">Phone</p>
                <a href="tel:+919880973453" className="text-neon font-semibold hover:underline">
                  +91-9880973453
                </a>
              </div>
            </div>
            <button
              onClick={() => setShowContactModal(false)}
              className="w-full px-6 py-3 bg-neon text-dark font-bold rounded-xl hover:neon-glow transition-all duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
