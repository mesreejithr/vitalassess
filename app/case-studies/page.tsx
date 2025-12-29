import type { Metadata } from 'next'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Section from '@/components/ui/Section'
import Badge from '@/components/ui/Badge'

export const metadata: Metadata = {
  title: 'Case Studies - Proven Results',
  description: 'See how organizations achieve 60-70% reduction in hiring time, scale to 15,000+ candidate assessments, and improve hiring quality with VitalAssess. Real results from SaaS startups, IT services companies, and edtech platforms.',
  openGraph: {
    title: 'VitalAssess Case Studies - Proven Results',
    description: 'See how organizations achieve 60-70% reduction in hiring time and scale candidate assessments with VitalAssess.',
    url: '/case-studies',
  },
  twitter: {
    title: 'VitalAssess Case Studies',
    description: 'Real results: 70% screening time reduction, 60% cycle time reduction, 15,000+ students evaluated.',
  },
}

export default function CaseStudies() {
  return (
    <>
      {/* Hero Section */}
      <Section className="py-20 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-dark mb-6">
            Case Studies
          </h1>
          <p className="text-xl text-gray-medium mb-4">
            See how organizations across industries are transforming their hiring 
            processes with VitalAssess
          </p>
          <p className="text-lg text-gray-medium">
            Real results from real companies using AI-powered assessments
          </p>
        </div>
      </Section>

      {/* Case Study 1: SaaS Startup Campus Drives */}
      <Section background="subtle" className="py-20">
        <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Badge variant="primary" className="mb-4">SaaS Startup</Badge>
              <h2 className="text-4xl font-bold text-dark mb-4">
                Streamlining Campus Recruitment Drives
              </h2>
              <p className="text-lg text-gray-medium">
                How a fast-growing SaaS startup reduced screening time by 70% during 
                campus recruitment drives
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">70%</div>
                <div className="text-gray-medium">Screening Time Reduction</div>
              </Card>
              <Card className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">2,500+</div>
                <div className="text-gray-medium">Candidates Assessed</div>
              </Card>
              <Card className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">5 Days</div>
                <div className="text-gray-medium">Complete Drive Duration</div>
              </Card>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-dark mb-4">Context</h3>
                <p className="text-gray-medium leading-relaxed">
                  A rapidly scaling SaaS startup conducts annual campus recruitment drives 
                  across 15+ engineering colleges. The company needed to identify top talent 
                  from thousands of applicants while maintaining a positive candidate experience 
                  and efficient hiring timelines.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-dark mb-4">Challenge</h3>
                <ul className="space-y-3 text-gray-medium">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">×</span>
                    <span>Manual resume screening consumed 3-4 weeks per drive, delaying offers and losing top candidates to competitors</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">×</span>
                    <span>Inconsistent evaluation standards across different colleges and interviewers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">×</span>
                    <span>Limited bandwidth to conduct technical assessments for all applicants</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">×</span>
                    <span>Poor candidate experience due to long wait times and lack of feedback</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-dark mb-4">Solution</h3>
                <p className="text-gray-medium leading-relaxed mb-4">
                  The startup implemented VitalAssess to automate the initial screening 
                  process for all campus drive applicants. The platform was configured with:
                </p>
                <ul className="space-y-2 text-gray-medium">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Role-specific technical assessments for software engineering positions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Automated candidate ranking based on coding skills and problem-solving ability</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Bulk invitation system for mass candidate onboarding</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Real-time dashboard for tracking candidate progress across all colleges</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-dark mb-4">Results</h3>
                <div className="space-y-4 text-gray-medium">
                  <p className="leading-relaxed">
                    The implementation delivered significant improvements across all key metrics:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span><strong className="text-dark">70% reduction in screening time:</strong> From 3-4 weeks to 5 days for complete drive completion</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span><strong className="text-dark">2,500+ candidates assessed:</strong> All applicants evaluated consistently within the drive timeline</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span><strong className="text-dark">Improved candidate quality:</strong> Top 20% of candidates automatically shortlisted with 85% interview-to-offer conversion rate</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span><strong className="text-dark">Enhanced candidate experience:</strong> 92% candidate satisfaction score with instant feedback and transparent process</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span><strong className="text-dark">Cost savings:</strong> Reduced hiring team effort by 60%, allowing focus on final interviews and onboarding</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-dark mb-4">What They Used</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    'AI-Powered Question Generation',
                    'Coding Tests',
                    'Auto-Scored Results & Ranking',
                    'Real-Time Analytics Dashboard',
                    'Bulk Candidate Invitations',
                    'Role-Based Assessments'
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-medium">
                      <span className="text-primary">✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <Button href="/contact" size="lg">
                  See How VitalAssess Can Help Your Campus Drives
                </Button>
              </div>
            </div>
          </div>
      </Section>

      {/* Case Study 2: Global IT Services Company */}
      <Section className="py-20">
        <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Badge variant="secondary" className="mb-4">Global IT Services</Badge>
              <h2 className="text-4xl font-bold text-dark mb-4">
                Scaling Multi-Function Hiring Across 8 Job Roles
              </h2>
              <p className="text-lg text-gray-medium">
                How a global IT services company reduced hiring cycle time by 60% 
                across 8 different job functions
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">60%</div>
                <div className="text-gray-medium">Cycle Time Reduction</div>
              </Card>
              <Card className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">8</div>
                <div className="text-gray-medium">Job Functions</div>
              </Card>
              <Card className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">12,000+</div>
                <div className="text-gray-medium">Candidates Assessed Annually</div>
              </Card>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-dark mb-4">Context</h3>
                <p className="text-gray-medium leading-relaxed">
                  A leading global IT services company with operations across 25+ countries 
                  needed to standardize hiring processes for multiple job functions including 
                  software development, data engineering, cloud architecture, cybersecurity, 
                  project management, business analysis, quality assurance, and technical support. 
                  Each function had unique assessment requirements and varying hiring volumes.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-dark mb-4">Challenge</h3>
                <ul className="space-y-3 text-gray-medium">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">×</span>
                    <span>Inconsistent hiring processes across different job functions and regions, leading to quality variations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">×</span>
                    <span>Average hiring cycle time of 8-10 weeks from application to offer, causing candidate dropouts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">×</span>
                    <span>Manual assessment creation and scoring consumed significant HR and technical team resources</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">×</span>
                    <span>Difficulty in comparing candidates across different functions and regions objectively</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">×</span>
                    <span>Lack of centralized analytics and reporting for hiring metrics and trends</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-dark mb-4">Solution</h3>
                <p className="text-gray-medium leading-relaxed mb-4">
                  The company deployed VitalAssess as a unified assessment platform across all 
                  8 job functions with role-specific configurations:
                </p>
                <ul className="space-y-2 text-gray-medium">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Custom assessment templates for each job function (technical, non-technical, and hybrid roles)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>AI-powered question generation tailored to specific role requirements and skill levels</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Advanced proctoring to ensure assessment integrity across remote and on-site evaluations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Enterprise dashboard with function-wise analytics and comparative reporting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Integration with existing ATS and HRIS systems for seamless workflow</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-dark mb-4">Results</h3>
                <div className="space-y-4 text-gray-medium">
                  <p className="leading-relaxed">
                    The standardized platform delivered measurable improvements across all functions:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span><strong className="text-dark">60% reduction in cycle time:</strong> From 8-10 weeks to 3-4 weeks average across all functions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span><strong className="text-dark">12,000+ candidates assessed annually:</strong> Consistent evaluation standards across all 8 job functions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span><strong className="text-dark">Improved hiring quality:</strong> 30% increase in first-year retention rates due to better role-fit assessment</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span><strong className="text-dark">Resource optimization:</strong> 50% reduction in HR team time spent on assessment creation and initial screening</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span><strong className="text-dark">Enhanced candidate experience:</strong> 88% candidate satisfaction with faster feedback and transparent evaluation process</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span><strong className="text-dark">Data-driven insights:</strong> Centralized analytics enabled better hiring decisions and trend identification across functions</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-dark mb-4">What They Used</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    'Role-Based Assessments (8 custom templates)',
                    'AI-Powered Question Generation',
                    'Advanced AI Proctoring',
                    'Auto-Scored Results & Ranking',
                    'Enterprise Dashboard & Analytics',
                    'ATS & HRIS Integrations',
                    'White-Label Branding',
                    'Real-Time Analytics & Shortlisting'
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-medium">
                      <span className="text-primary">✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <Button href="/contact" size="lg">
                  Learn How to Scale Your Multi-Function Hiring
                </Button>
              </div>
            </div>
          </div>
      </Section>

      {/* Case Study 3: Edtech Internship Challenge */}
      <Section background="subtle" className="py-20">
        <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Badge variant="subtle" className="mb-4">Edtech Platform</Badge>
              <h2 className="text-4xl font-bold text-dark mb-4">
                Large-Scale Internship Challenge Evaluation
              </h2>
              <p className="text-lg text-gray-medium">
                How an edtech platform evaluated 15,000+ students and shortlisted 
                top 500 in just 3 days
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">15,000+</div>
                <div className="text-gray-medium">Students Evaluated</div>
              </Card>
              <Card className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">3 Days</div>
                <div className="text-gray-medium">Evaluation Timeline</div>
              </Card>
              <Card className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">500</div>
                <div className="text-gray-medium">Top Candidates Shortlisted</div>
              </Card>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-dark mb-4">Context</h3>
                <p className="text-gray-medium leading-relaxed">
                  A leading edtech platform organized a nationwide internship challenge to 
                  identify top talent from engineering and computer science students. The 
                  challenge received over 15,000 applications from students across 200+ 
                  colleges and universities. The platform needed to evaluate all applicants 
                  fairly and efficiently to select the top 500 candidates for internship 
                  opportunities.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-dark mb-4">Challenge</h3>
                <ul className="space-y-3 text-gray-medium">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">×</span>
                    <span>Evaluating 15,000+ applications manually would take 6-8 weeks, missing internship timelines</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">×</span>
                    <span>Ensuring fair and consistent evaluation across such a large candidate pool</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">×</span>
                    <span>Managing assessment delivery and candidate communication at scale</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">×</span>
                    <span>Identifying top performers accurately from massive applicant pool</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">×</span>
                    <span>Providing timely feedback to all participants to maintain engagement</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-dark mb-4">Solution</h3>
                <p className="text-gray-medium leading-relaxed mb-4">
                  The edtech platform leveraged VitalAssess to automate the entire evaluation 
                  process with a multi-stage assessment approach:
                </p>
                <ul className="space-y-2 text-gray-medium">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Two-stage assessment: Cognitive ability test followed by technical coding challenge</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Bulk invitation system to onboard all 15,000+ candidates simultaneously</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Automated scoring and ranking with percentile-based shortlisting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Advanced proctoring to maintain assessment integrity at scale</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Real-time dashboard for monitoring candidate progress and completion rates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Automated email notifications and feedback delivery to all participants</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-dark mb-4">Results</h3>
                <div className="space-y-4 text-gray-medium">
                  <p className="leading-relaxed">
                    The platform successfully completed the evaluation within the tight timeline:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span><strong className="text-dark">15,000+ students evaluated:</strong> Complete assessment of all applicants within 3 days</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span><strong className="text-dark">Top 500 shortlisted:</strong> Automated ranking identified top 3.3% of candidates based on performance metrics</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span><strong className="text-dark">95% completion rate:</strong> High engagement with automated reminders and clear instructions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span><strong className="text-dark">Fair evaluation:</strong> Consistent assessment standards ensured objective comparison across all candidates</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span><strong className="text-dark">Enhanced brand reputation:</strong> 89% participant satisfaction with transparent process and timely feedback</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span><strong className="text-dark">Operational efficiency:</strong> Reduced evaluation team effort by 80% compared to manual processes</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-dark mb-4">What They Used</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    'Cognitive Ability Tests',
                    'Coding Tests',
                    'Bulk Candidate Invitations',
                    'Advanced AI Proctoring',
                    'Auto-Scored Results & Ranking',
                    'Real-Time Analytics Dashboard',
                    'Automated Shortlisting',
                    'Email Notifications & Feedback'
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-medium">
                      <span className="text-primary">✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <Button href="/contact" size="lg">
                  Discover How to Scale Your Evaluation Process
                </Button>
              </div>
            </div>
          </div>
      </Section>

      {/* Final CTA */}
      <Section className="py-20">
        <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-dark mb-6">
              Ready to Transform Your Hiring Process?
            </h2>
            <p className="text-xl text-gray-medium mb-8">
              See how VitalAssess can help your organization achieve similar results. 
              Schedule a demo to explore the platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" size="lg">
                Request Demo
              </Button>
              <Button href="/pricing" variant="outline" size="lg">
                View Pricing
              </Button>
            </div>
          </div>
      </Section>
    </>
  )
}
