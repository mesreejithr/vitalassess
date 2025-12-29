import type { Metadata } from 'next'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Section from '@/components/ui/Section'

export const metadata: Metadata = {
  title: 'AI-Powered Hiring Intelligence Platform',
  description: 'Transform your hiring process with AI-generated assessments, secure proctoring, instant ranking, and role-fit insights. Reduce time-to-hire by 60% with intelligent candidate evaluation.',
  openGraph: {
    title: 'VitalAssess - AI-Powered Hiring Intelligence',
    description: 'Transform your hiring process with AI-generated assessments, secure proctoring, instant ranking, and role-fit insights.',
    url: '/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VitalAssess - AI-Powered Hiring Intelligence',
    description: 'Transform your hiring process with AI-generated assessments, secure proctoring, instant ranking, and role-fit insights.',
  },
}

export default function Home() {
  return (
    <>
      {/* 1. Hero Section */}
      <Section id="hero" className="py-24 md:py-32">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-dark mb-6">
            AI-Powered Hiring Intelligence
          </h1>
          <p className="text-xl text-gray-medium max-w-3xl mx-auto mb-4 font-medium">
            AI-generated assessments + secure proctoring + instant ranking + role-fit insights.
          </p>
          <p className="text-lg text-gray-medium max-w-2xl mx-auto mb-8">
            Transform your hiring process with intelligent assessments that identify top talent 
            through objective evaluation and predictive analytics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg">
              Request Demo
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              View Sample Report
            </Button>
          </div>
        </div>
      </Section>

      {/* 2. Trust Strip */}
      <Section id="trust" background="subtle" className="py-12">
        <p className="text-center text-sm text-gray-medium mb-8">Trusted by leading companies</p>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-8 items-center opacity-60">
          {['Manipal', 'Hirepro', 'Wecp', 'UpGrad', 'TATAAIG', 'Scaler'].map((logo, i) => (
            <div key={i} className="text-center text-gray-medium font-semibold text-sm md:text-lg" aria-label={`${logo} company logo`}>
              {logo}
            </div>
          ))}
        </div>
      </Section>

      {/* 3. Problem Section */}
      <Section id="problem" className="py-20">
        <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-dark mb-6 text-center">
              The Hiring Challenge
            </h2>
            <p className="text-lg text-gray-medium mb-8 text-center">
              Traditional hiring processes face significant limitations:
            </p>
            <ul className="space-y-4">
              {[
                'Manual resume screening consumes 20+ hours per role with inconsistent results',
                'Interviews capture only a fraction of candidate capabilities and potential',
                'Poor hiring decisions result in ₹12,50,000+ in productivity loss and rehiring costs',
                'Top candidates withdraw due to slow, opaque evaluation processes',
                'Subjective evaluation methods introduce bias and reduce hiring quality'
              ].map((problem, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl mt-1">×</span>
                  <span className="text-gray-medium text-lg">{problem}</span>
                </li>
              ))}
            </ul>
          </div>
      </Section>

      {/* 4. Solution Overview */}
      <Section id="solution" background="subtle" className="py-20">
        <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">
              The VitalAssess Solution
            </h2>
            <p className="text-lg text-gray-medium max-w-2xl mx-auto">
              A comprehensive platform that combines AI intelligence, secure proctoring, 
              and instant insights to streamline hiring decisions
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'AI-Powered Intelligence',
                description: 'Advanced algorithms generate role-specific questions and analyze responses to predict job performance with measurable accuracy.'
              },
              {
                title: 'Secure & Objective',
                description: 'Enterprise-grade proctoring ensures assessment integrity while eliminating bias through standardized, data-driven evaluation.'
              },
              {
                title: 'Instant Insights',
                description: 'Automated scoring and ranking provide immediate candidate insights, reducing time-to-hire by up to 60%.'
              }
            ].map((pillar, i) => (
              <Card key={i} hover className="text-center">
                <div className="text-primary text-5xl font-bold mb-4">{i + 1}</div>
                <h3 className="text-2xl font-bold text-dark mb-4">{pillar.title}</h3>
                <p className="text-gray-medium">{pillar.description}</p>
              </Card>
            ))}
          </div>
      </Section>

      {/* 5. Key Features */}
      <Section id="features" className="py-20">
        <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">
              Platform Features
            </h2>
            <p className="text-lg text-gray-medium max-w-2xl mx-auto">
              Comprehensive tools for end-to-end candidate assessment and evaluation
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                title: 'AI-Powered Question Generation', 
                desc: 'Automatically generate role-specific assessment questions using advanced AI models trained on job requirements and success patterns.' 
              },
              { 
                title: 'Advanced AI Proctoring', 
                desc: 'Multi-layered security monitoring including webcam analysis, microphone detection, browser activity tracking, and behavioral pattern recognition to ensure assessment integrity.' 
              },
              { 
                title: 'Role-Based Assessments', 
                desc: 'Pre-configured assessment templates for technical roles, non-technical positions, and sales teams, with full customization capabilities.' 
              },
              { 
                title: 'Auto-Scored Results & Ranking', 
                desc: 'Instant automated scoring with intelligent candidate ranking based on role requirements, performance metrics, and fit indicators.' 
              },
              { 
                title: 'Video Interview Integration', 
                desc: 'Seamless video interview capabilities with AI-powered analysis of communication skills, presentation quality, and cultural alignment.' 
              },
              { 
                title: 'Real-Time Analytics & Shortlisting', 
                desc: 'Live dashboards with candidate performance metrics, comparative analysis, and automated shortlisting recommendations for hiring teams.' 
              },
              { 
                title: 'Enterprise Dashboard & Branding', 
                desc: 'Customizable white-label options with enterprise-grade dashboards, company branding, and role-based access controls for hiring teams.' 
              }
            ].map((feature, i) => (
              <Card key={i} hover>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-primary text-2xl font-bold">{i + 1}</span>
                </div>
                <h3 className="text-xl font-semibold text-dark mb-2">{feature.title}</h3>
                <p className="text-gray-medium">{feature.desc}</p>
              </Card>
            ))}
          </div>
      </Section>

      {/* 6. Assessment Types */}
      <Section id="assessments" background="subtle" className="py-20">
        <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">
              Assessment Types
            </h2>
            <p className="text-lg text-gray-medium max-w-2xl mx-auto">
              Comprehensive evaluation methods for complete candidate assessment
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                title: 'Objective Assessments', 
                desc: 'Multiple-choice and structured questions with automated scoring for consistent, bias-free evaluation of knowledge and skills.' 
              },
              { 
                title: 'Subjective Assessments', 
                desc: 'Open-ended questions and written responses evaluated through AI analysis for critical thinking and communication assessment.' 
              },
              { 
                title: 'Psychometric Tests', 
                desc: 'Personality and behavioral assessments measuring traits, work styles, and cultural fit alignment with role requirements.' 
              },
              { 
                title: 'Cognitive Ability Tests', 
                desc: 'Problem-solving, analytical reasoning, and cognitive aptitude evaluation for predicting job performance and learning agility.' 
              },
              { 
                title: 'Video Interviews', 
                desc: 'Structured video responses with AI-powered analysis of communication effectiveness, presentation skills, and professional presence.' 
              },
              { 
                title: 'Coding Tests', 
                desc: 'Technical programming assessments with real-time code evaluation, debugging challenges, and algorithm problem-solving for technical roles.' 
              }
            ].map((type, i) => (
              <Card key={i} hover>
                <h3 className="text-xl font-semibold text-dark mb-3">{type.title}</h3>
                <p className="text-gray-medium">{type.desc}</p>
              </Card>
            ))}
          </div>
      </Section>

      {/* 7. How It Works */}
      <Section id="how-it-works" className="py-20">
        <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-medium max-w-2xl mx-auto">
              Streamlined process from configuration to hiring decision
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { 
                step: '1', 
                title: 'Configure', 
                desc: 'Define role requirements, select assessment types, and configure evaluation criteria through the platform dashboard.' 
              },
              { 
                step: '2', 
                title: 'Invite', 
                desc: 'Send secure assessment links to candidates via email, ATS integration, or direct invitation with automated reminders.' 
              },
              { 
                step: '3', 
                title: 'Assess', 
                desc: 'Candidates complete assessments with AI proctoring monitoring. Results are automatically scored and analyzed in real-time.' 
              },
              { 
                step: '4', 
                title: 'Decide', 
                desc: 'Review ranked candidate results, role-fit insights, and performance analytics to make informed hiring decisions.' 
              }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-dark mb-2">{item.title}</h3>
                <p className="text-gray-medium">{item.desc}</p>
              </div>
            ))}
          </div>
      </Section>

      {/* 8. Differentiation */}
      <Section id="why-vitalassess" background="subtle" className="py-20">
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-dark mb-4">
                Why VitalAssess?
              </h2>
              <p className="text-lg text-gray-medium">
                Enterprise-grade capabilities that set us apart
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { 
                  title: 'Proven AI Accuracy', 
                  desc: 'Advanced machine learning models trained on millions of hiring outcomes deliver measurable prediction accuracy for job performance and retention.' 
                },
                { 
                  title: 'Enterprise Security', 
                  desc: 'SOC 2 Type II, GDPR, and ISO 27001 certified with bank-level encryption, data residency controls, and comprehensive audit trails.' 
                },
                { 
                  title: 'White-Label Branding', 
                  desc: 'Fully customizable platform branding, assessment interfaces, and reporting dashboards to match your company identity and requirements.' 
                },
                { 
                  title: 'Dedicated Support', 
                  desc: '24/7 enterprise support with dedicated account managers, custom onboarding, and ongoing optimization for your hiring workflows.' 
                }
              ].map((item, i) => (
                <Card key={i} hover>
                  <h3 className="text-xl font-semibold text-dark mb-3">{item.title}</h3>
                  <p className="text-gray-medium">{item.desc}</p>
                </Card>
              ))}
            </div>
          </div>
      </Section>

      {/* 9. Use Cases */}
      <Section id="use-cases" className="py-20">
        <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">
              Use Cases
            </h2>
            <p className="text-lg text-gray-medium max-w-2xl mx-auto">
              Designed for diverse hiring scenarios across industries and roles
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                title: 'High-Volume Recruitment', 
                desc: 'Efficiently screen and evaluate thousands of candidates for retail, hospitality, customer service, and call center positions with automated workflows.' 
              },
              { 
                title: 'Technical Hiring', 
                desc: 'Comprehensive evaluation of coding skills, system design capabilities, technical problem-solving, and engineering competencies for software development roles.' 
              },
              { 
                title: 'Sales Team Building', 
                desc: 'Assess communication skills, persuasion ability, resilience, and sales aptitude through role-specific assessments and video interview analysis.' 
              },
              { 
                title: 'Executive Search', 
                desc: 'Evaluate leadership potential, strategic thinking, decision-making capabilities, and cultural alignment for C-suite and senior management positions.' 
              },
              { 
                title: 'Graduate Programs', 
                desc: 'Identify high-potential early-career talent through cognitive assessments, personality evaluation, and learning agility measurement for entry-level roles.' 
              },
              { 
                title: 'Internal Mobility', 
                desc: 'Assess existing employees for promotions, role transitions, and lateral moves with objective evaluation of skills, potential, and role fit.' 
              }
            ].map((useCase, i) => (
              <Card key={i} hover>
                <h3 className="text-xl font-semibold text-dark mb-3">{useCase.title}</h3>
                <p className="text-gray-medium">{useCase.desc}</p>
              </Card>
            ))}
          </div>
      </Section>

      {/* 10. Case Studies Preview */}
      <Section id="case-studies" background="subtle" className="py-20">
        <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">
              Proven Results
            </h2>
            <p className="text-lg text-gray-medium max-w-2xl mx-auto">
              Organizations achieving measurable improvements in hiring efficiency and quality
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                company: 'Manipal', 
                metric: '65%', 
                label: 'Faster Time-to-Hire', 
                desc: 'Reduced engineering hiring cycle from 6 weeks to 2 weeks while improving candidate quality through automated assessment and ranking.' 
              },
              { 
                company: 'Hirepro', 
                metric: '10K+', 
                label: 'Candidates Assessed', 
                desc: 'Scaled recruitment operations across 12 countries with consistent assessment standards and centralized analytics dashboard.' 
              },
              { 
                company: 'Wecp', 
                metric: '90%', 
                label: 'Candidate Satisfaction', 
                desc: 'Improved employer brand perception and candidate experience through transparent, efficient assessment processes and timely feedback.' 
              }
            ].map((study, i) => (
              <Card key={i} hover>
                <div className="text-primary font-semibold mb-2">{study.company}</div>
                <div className="text-4xl font-bold text-dark mb-2">{study.metric}</div>
                <div className="text-gray-medium mb-4">{study.label}</div>
                <p className="text-gray-medium text-sm">{study.desc}</p>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button href="/case-studies" variant="outline">
              View All Case Studies
            </Button>
          </div>
      </Section>

      {/* 11. Pricing Preview */}
      <Section id="pricing" className="py-20">
        <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">
              Pricing
            </h2>
            <p className="text-lg text-gray-medium max-w-2xl mx-auto">
              Transparent pricing based on assessment volume and feature requirements
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center">
              <h3 className="text-2xl font-bold text-dark mb-2">Starter</h3>
              <div className="my-6">
                <span className="text-4xl font-bold text-dark">₹8,000</span>
                <span className="text-gray-medium">/month</span>
              </div>
              <ul className="text-left space-y-2 mb-8 text-gray-medium text-sm">
                <li>✓ Up to 100 assessments/month</li>
                <li>✓ AI question generation</li>
                <li>✓ Basic proctoring</li>
                <li>✓ Email support</li>
              </ul>
              <Button href="/contact" variant="outline" className="w-full">
                Get Started
              </Button>
            </Card>
            <Card className="text-center border-2 border-primary relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                Popular
              </div>
              <h3 className="text-2xl font-bold text-dark mb-2">Professional</h3>
              <div className="my-6">
                <span className="text-4xl font-bold text-dark">₹25,000</span>
                <span className="text-gray-medium">/month</span>
              </div>
              <ul className="text-left space-y-2 mb-8 text-gray-medium text-sm">
                <li>✓ Up to 500 assessments/month</li>
                <li>✓ Advanced AI proctoring</li>
                <li>✓ Video interview integration</li>
                <li>✓ Real-time analytics</li>
                <li>✓ Priority support</li>
              </ul>
              <Button href="/contact" className="w-full">
                Get Started
              </Button>
            </Card>
            <Card className="text-center">
              <h3 className="text-2xl font-bold text-dark mb-2">Enterprise</h3>
              <div className="my-6">
                <span className="text-4xl font-bold text-dark">Custom</span>
              </div>
              <ul className="text-left space-y-2 mb-8 text-gray-medium text-sm">
                <li>✓ Unlimited assessments</li>
                <li>✓ White-label branding</li>
                <li>✓ Custom integrations</li>
                <li>✓ Dedicated support</li>
                <li>✓ SLA guarantees</li>
              </ul>
              <Button href="/contact" variant="outline" className="w-full">
                Contact Sales
              </Button>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Button href="/pricing" variant="outline">
              View Full Pricing Details
            </Button>
          </div>
      </Section>

      {/* 12. FAQ */}
      <Section id="faq" background="subtle" className="py-20">
        <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-dark mb-4">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-6">
              {[
                {
                  q: 'How does AI-powered question generation work?',
                  a: 'Our AI models analyze job descriptions, role requirements, and success patterns to automatically generate relevant assessment questions. You can customize, approve, or modify generated questions before deploying assessments to candidates.'
                },
                {
                  q: 'What security measures are in place for proctoring?',
                  a: 'Advanced AI proctoring monitors webcam activity, microphone usage, browser behavior, and interaction patterns. All data is encrypted in transit and at rest, with comprehensive audit logs. We maintain SOC 2 Type II, GDPR, and ISO 27001 certifications.'
                },
                {
                  q: 'Can assessments be customized for specific roles?',
                  a: 'Yes. The platform supports role-based assessment templates for technical, non-technical, and sales positions. You can customize question sets, evaluation criteria, scoring weights, and assessment duration to match your specific hiring requirements.'
                },
                {
                  q: 'What integrations are available?',
                  a: 'VitalAssess integrates with major ATS platforms (Greenhouse, Lever, Workday, Bullhorn), HRIS systems, and calendar tools. We also provide RESTful APIs for custom integrations and webhook support for real-time data synchronization.'
                }
              ].map((faq, i) => (
                <Card key={i}>
                  <h3 className="text-xl font-semibold text-dark mb-3">{faq.q}</h3>
                  <p className="text-gray-medium">{faq.a}</p>
                </Card>
              ))}
            </div>
          </div>
      </Section>

      {/* 13. Final CTA */}
      <Section id="cta" className="py-20">
        <div className="bg-primary rounded-2xl p-12 md:p-16 text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Hiring Process?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Schedule a demo to see how VitalAssess can streamline your candidate assessment 
              and improve hiring decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="secondary" size="lg">
                Request Demo
              </Button>
              <Button href="/pricing" variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
                View Pricing
              </Button>
            </div>
          </div>
      </Section>
    </>
  )
}
