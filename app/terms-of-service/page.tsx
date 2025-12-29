import type { Metadata } from 'next'
import Section from '@/components/ui/Section'

export const metadata: Metadata = {
  title: 'Terms of Service - VitalAssess',
  description: 'VitalAssess Terms of Service - Read our terms and conditions for using our AI-powered hiring intelligence platform.',
}

export default function TermsOfService() {
  return (
    <Section className="py-20">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-dark mb-6">Terms of Service</h1>
          <p className="text-lg text-gray-medium">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <div className="prose prose-lg max-w-none space-y-8 text-gray-medium">
          <div>
            <p>
              In order to use the Services - you must create a VitalAssess account at www.vitalassess.com
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-dark mb-4 mt-8">Eligibility</h2>
            <p>
              By using the Services, you represent and warrant that: (a) all registration information you submit is 
              truthful and accurate; (b) you will maintain the accuracy of such information; (c) you are eighteen (18) 
              years of age or older upon registration; and (d) your use of the Services does not violate any applicable 
              law or regulation, or any other obligation (including contractual obligation) you might have towards third parties. 
              Any Account you have created by registering on the Site may be deleted without warning if we believe that any 
              representation and warranty you make hereunder is breached or inaccurate.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-dark mb-4 mt-8">Communication Consent</h2>
            <p>
              By using our Services, you expressly authorize VitalAssess and its representatives to contact you via email, 
              SMS, RCS, WhatsApp, phone calls, or other third-party messaging applications for updates, service alerts, support, 
              marketing, and promotional purposes in accordance with applicable laws and regulations.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-dark mb-4 mt-8">Password</h2>
            <p>
              When you register to become a Member, you will also be asked to choose a password for your Account. You are 
              entirely responsible for maintaining the confidentiality of your password. You agree not to use the Account or 
              password of another Member at any time. You agree to notify us immediately if you suspect any unauthorized use of 
              your Account or access to your password. You are solely responsible for any and all use of your Account.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-dark mb-4 mt-8">Term and Termination</h2>
            <p>
              This Agreement shall remain in full force and effect (a) while you are using the Services IN ANY FORM, if you are 
              a Visitor or User, and (b) for the duration of your membership, if you are a Member. You may delete your Account 
              and end your membership at any time, for any or no reason by sending your request to Customer Care or from your account; 
              please note that even if you delete your Account but continue to use the Services as a Visitor, your use of the Services 
              is still subject to this Agreement. Unless VitalAssess has terminated your Account, you can start a new membership by 
              registering and providing new details about the account. We may terminate your membership for any or no reason at any 
              time by ceasing to provide the Services to you. You understand that termination of this Agreement and the Account you 
              have created with us may involve deletion of your Account information from our live databases. We will not have any 
              liability whatsoever to you for any termination of your Account or related deletion of your information.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-dark mb-4 mt-8">Rejection and Non Acceptance of Registration</h2>
            <p>
              VitalAssess can at any point of time reject a particular registration (Candidates, users, advertisers and partners) if 
              the party is found to use the site for actions that hamper the reputation of VitalAssess business.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-dark mb-4 mt-8">Refund Policy for Employers</h2>
            
            <h3 className="text-2xl font-semibold text-dark mb-3 mt-6">No Cancellation and No Refunds</h3>
            <p>
              Once an online package is purchased from VitalAssess, cancellations are not permitted. No refunds will be issued under 
              any circumstances after payment is made.
            </p>

            <h3 className="text-2xl font-semibold text-dark mb-3 mt-6">Multiple Payments</h3>
            <p>
              If multiple payments are made for a single product, please notify us within 7 days of the transaction. Upon notification, 
              we will process a refund for the extra amount within 7 days on a case-by-case basis. Refund requests made after 7 days 
              of the transaction will not be considered.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-dark mb-4 mt-8">Service Usage and Restrictions</h2>
            <p>
              You agree to use VitalAssess services solely for lawful purposes and in accordance with these Terms of Service. You agree 
              not to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Use the Services to violate any applicable laws or regulations</li>
              <li>Attempt to gain unauthorized access to any portion of the Services or any other accounts, computer systems, or networks</li>
              <li>Interfere with or disrupt the Services or servers or networks connected to the Services</li>
              <li>Use any automated means to access the Services or collect any information from the Services without our express written permission</li>
              <li>Reproduce, duplicate, copy, sell, resell, or exploit any portion of the Services without our express written permission</li>
              <li>Use the Services to transmit any viruses, worms, defects, Trojan horses, or other items of a destructive nature</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-dark mb-4 mt-8">Intellectual Property</h2>
            <p>
              All content, features, and functionality of the Services, including but not limited to text, graphics, logos, icons, images, 
              audio clips, digital downloads, data compilations, and software, are the exclusive property of VitalAssess and its licensors 
              and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-dark mb-4 mt-8">Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by applicable law, VitalAssess shall not be liable for any indirect, incidental, special, 
              consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss 
              of data, use, goodwill, or other intangible losses resulting from your use of the Services.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-dark mb-4 mt-8">Changes to Terms</h2>
            <p>
              VitalAssess reserves the right to modify these Terms of Service at any time. We will notify users of any material changes 
              by posting the new Terms of Service on this page and updating the &quot;Last updated&quot; date. Your continued use of the Services 
              after any such changes constitutes your acceptance of the new Terms of Service.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-dark mb-4 mt-8">Contact Us</h2>
            <p>
              If you have any questions about this Terms of Service or your dealings with our site, please{' '}
              <a href="/contact" className="text-primary hover:underline">Contact Us</a>. Write to{' '}
              <a href="mailto:mail@vitalassess.com" className="text-primary hover:underline">mail@vitalassess.com</a>
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}

