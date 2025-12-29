import type { Metadata } from 'next'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Section from '@/components/ui/Section'
import Badge from '@/components/ui/Badge'
import FaqAccordion from '@/components/ui/FaqAccordion'

export const metadata: Metadata = {
  title: 'Pricing - Simple, Transparent Plans',
  description: 'Choose the right plan for your hiring needs. Pay-as-you-go, Growth, and Enterprise plans with volume pricing available. Transparent pricing starting at ₹499 per assessment.',
  openGraph: {
    title: 'VitalAssess Pricing - Simple, Transparent Plans',
    description: 'Choose the right plan for your hiring needs. Pay-as-you-go, Growth, and Enterprise plans with volume pricing available.',
    url: '/pricing',
  },
  twitter: {
    title: 'VitalAssess Pricing',
    description: 'Simple, transparent pricing plans for AI-powered hiring assessments.',
  },
}

export default function Pricing() {
  return (
    <>
      {/* Hero Section */}
      <Section className="py-20 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-dark mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-medium mb-4">
            Choose the plan that aligns with your hiring volume and requirements. 
            All plans include AI-powered assessments, secure proctoring, and instant results.
          </p>
          <p className="text-lg text-gray-medium">
            Start with pay-as-you-go or scale with monthly plans for better value.
          </p>
        </div>
      </Section>

      {/* Pricing Plans */}
      <Section background="subtle" className="py-20">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Pay-as-you-go Plan */}
            <Card className="text-center">
              <h3 className="text-2xl font-bold text-dark mb-3">Pay-as-you-go</h3>
              <Badge variant="subtle" className="mb-4">Best for occasional hiring</Badge>
              <div className="my-6">
                <div className="text-4xl font-bold text-dark mb-2">Starts at</div>
                <div className="text-5xl font-bold text-primary">₹499</div>
                <div className="text-gray-medium mt-2">per assessment</div>
              </div>
              <div className="text-left mb-8">
                <div className="font-semibold text-dark mb-3">Includes:</div>
                <ul className="space-y-2 text-gray-medium text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>AI-generated questions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Basic AI proctoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Auto-scored results</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Candidate ranking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Email support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Standard assessment types</span>
                  </li>
                </ul>
              </div>
              <Button href="/contact" variant="outline" className="w-full">
                Get Started
              </Button>
            </Card>

            {/* Growth Plan */}
            <Card className="text-center border-2 border-primary relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-dark mb-3">Growth</h3>
              <Badge variant="primary" className="mb-4">Best for growing teams</Badge>
              <div className="my-6">
                <div className="text-4xl font-bold text-dark mb-2">Starts at</div>
                <div className="text-5xl font-bold text-primary">₹299</div>
                <div className="text-gray-medium mt-2">per assessment</div>
                <div className="text-sm text-gray-medium mt-3">Minimum 50 assessments/month</div>
              </div>
              <div className="text-left mb-8">
                <div className="font-semibold text-dark mb-3">Everything in Pay-as-you-go, plus:</div>
                <ul className="space-y-2 text-gray-medium text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Advanced AI proctoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Video interview integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Real-time analytics dashboard</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Automated shortlisting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>ATS integrations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Team collaboration tools</span>
                  </li>
                </ul>
              </div>
              <Button href="/contact" className="w-full">
                Get Started
              </Button>
            </Card>

            {/* Enterprise Plan */}
            <Card className="text-center">
              <h3 className="text-2xl font-bold text-dark mb-3">Enterprise</h3>
              <Badge variant="secondary" className="mb-4">Best for large organizations</Badge>
              <div className="my-6">
                <div className="text-4xl font-bold text-dark mb-2">Custom</div>
                <div className="text-gray-medium mt-2">Volume pricing available</div>
              </div>
              <div className="text-left mb-8">
                <div className="font-semibold text-dark mb-3">Everything in Growth, plus:</div>
                <ul className="space-y-2 text-gray-medium text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Unlimited assessments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>White-label branding</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Custom assessment development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Dedicated account manager</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>24/7 priority support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Custom integrations & API access</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>SLA guarantees</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>On-premise deployment options</span>
                  </li>
                </ul>
              </div>
              <Button href="/contact" variant="outline" className="w-full">
                Contact Sales
              </Button>
            </Card>
          </div>

          {/* Volume Pricing Note */}
          <div className="mt-12 max-w-3xl mx-auto">
            <Card className="bg-primary-light border-primary/20">
              <div className="text-center">
                <h4 className="text-lg font-semibold text-dark mb-2">
                  Volume Pricing & Custom Tests Available
                </h4>
                <p className="text-gray-medium mb-4">
                  For organizations with high-volume hiring needs or requiring custom assessment 
                  development, we offer discounted volume pricing and tailored solutions. 
                  Contact our sales team to discuss your specific requirements.
                </p>
                <Button href="/contact" variant="outline" size="sm">
                  Contact Sales for Volume Pricing
                </Button>
              </div>
            </Card>
          </div>
      </Section>

      {/* FAQ Section */}
      <Section className="py-20">
        <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-dark mb-4">
                Pricing Questions
              </h2>
              <p className="text-lg text-gray-medium">
                Common questions about our pricing and plans
              </p>
            </div>
            <FaqAccordion
              items={[
                {
                  question: 'How is pricing calculated?',
                  answer: 'Pricing is based on the number of assessments completed. Pay-as-you-go charges per assessment, while Growth and Enterprise plans offer volume discounts. Assessments are counted when a candidate completes and submits their evaluation, regardless of whether they pass or fail.'
                },
                {
                  question: 'Can I switch between plans?',
                  answer: 'Yes, you can upgrade or downgrade your plan at any time. Upgrades take effect immediately, while downgrades apply at the start of your next billing cycle. Unused assessments in monthly plans do not roll over to the next month.'
                },
                {
                  question: 'What happens if I exceed my plan limits?',
                  answer: 'For Growth and Enterprise plans, additional assessments beyond your monthly limit are charged at the pay-as-you-go rate (₹499 per assessment). You can also upgrade your plan mid-cycle to accommodate higher volumes. We\'ll notify you when you\'re approaching your limit.'
                },
                {
                  question: 'Are there setup fees or hidden costs?',
                  answer: 'No setup fees or hidden costs. You only pay for assessments completed. All plans include standard features like AI question generation, basic proctoring, and result scoring. Additional services like custom assessment development or white-label branding are available as add-ons for Enterprise customers.'
                },
                {
                  question: 'Do you offer refunds?',
                  answer: 'We offer refunds for unused assessments in monthly plans if you cancel within 7 days of your subscription start date. Pay-as-you-go assessments are non-refundable once completed. Enterprise customers can discuss custom refund terms as part of their agreement.'
                },
                {
                  question: 'What payment methods do you accept?',
                  answer: 'We accept all major credit cards, debit cards, and bank transfers. Enterprise customers can also set up invoicing with net-30 payment terms. All payments are processed securely through PCI-compliant payment gateways.'
                },
                {
                  question: 'Is there a free trial?',
                  answer: 'Yes, we offer a 14-day free trial with 5 complimentary assessments so you can evaluate the platform. No credit card required. After the trial, you can choose any plan or continue with pay-as-you-go pricing.'
                }
              ]}
            />
          </div>
      </Section>

      {/* Contact CTA */}
      <Section background="subtle" className="py-20">
        <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-dark mb-6">
              Need Help Choosing a Plan?
            </h2>
            <p className="text-xl text-gray-medium mb-8">
              Our team can help you select the right plan based on your hiring volume, 
              assessment requirements, and organizational needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" size="lg">
                Contact Sales
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Schedule a Demo
              </Button>
            </div>
          </div>
      </Section>
    </>
  )
}
