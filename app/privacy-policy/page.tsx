import type { Metadata } from 'next'
import Section from '@/components/ui/Section'

export const metadata: Metadata = {
  title: 'Privacy Policy - VitalAssess',
  description: 'VitalAssess Privacy Policy - Learn how we collect, use, and protect your personal information.',
}

export default function PrivacyPolicy() {
  return (
    <Section className="py-20">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-dark mb-6">Privacy Policy</h1>
          <p className="text-lg text-gray-medium">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <div className="prose prose-lg max-w-none space-y-8 text-gray-medium">
          <div>
            <p>
              VitalAssess is committed to safeguarding your privacy online. We will use our best efforts to ensure that 
              the information you submit to us remains private. Please read the following policy to understand how your 
              personal information will be treated. This policy may change from time to time so please check back periodically.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-dark mb-4 mt-8">Information Collection and Use</h2>
            
            <h3 className="text-2xl font-semibold text-dark mb-3 mt-6">Registration</h3>
            <p>
              A user must register in order to utilize the assessment and hiring intelligence service. During registration, 
              a user is required to provide certain categories of information, such as name, address, company information, 
              e-mail address and password. In addition, a user may choose to provide other categories of information, such as 
              hiring requirements, role specifications, assessment preferences and other hiring-related information. 
              VitalAssess encourages its users to provide all of these fields of information so that users may maximize the 
              effectiveness of the assessment and candidate evaluation services.
            </p>

            <h3 className="text-2xl font-semibold text-dark mb-3 mt-6">Passive Collection of Information</h3>
            <p>
              In addition to the information that you actively provide to VitalAssess by methods such as completing the 
              registration form, VitalAssess collects information about how you interact with our site. VitalAssess collects 
              passive information for purposes such as testing and improving a user&apos;s experience at the site and the compilation 
              of broad aggregate demographic data and related usage information for internal purposes and for disclosure to third 
              parties such as advertisers and content partners. The types of passive information collected by this site include, 
              without limitation, your IP address, which type of browser you are using, where you go on our site, and how long you 
              stay on any part of our site. Passive information does not identify you to VitalAssess by name, and VitalAssess 
              does not link your IP address to your personally identifiable information.
            </p>

            <h3 className="text-2xl font-semibold text-dark mb-3 mt-6">Optional Information</h3>
            <p>
              At various other points during your visit to VitalAssess, you may be asked to provide information about yourself. 
              For example, you may indicate that you wish to participate in a partner company sponsored contest. At this point 
              your information would become the property of both VitalAssess and the partner co-sponsoring the contest. In instances 
              such as this, VitalAssess is not responsible for the information that the partner company receives. Participation in 
              surveys or contests or the use of other services that require the input of additional information is completely voluntary 
              on your part, and you have the choice about whether to disclose the information necessary to use these features of our site.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-dark mb-4 mt-8">Use of Information</h2>
            <p>
              The information that you supply to VitalAssess enables us to provide assessment and candidate evaluation services. 
              In addition, VitalAssess uses your information in order to customize our site to your interests and enhance your overall 
              experience at our site. VitalAssess tries to recognize you using various methods, including having you log in with your 
              e-mail address and your password. Once VitalAssess recognizes you, pages, advertisements and other content may be customized 
              for you so that you can see what interests you the most. In addition, as described above, VitalAssess utilizes passive 
              information to learn more about how you interact with our site. This passive information may be combined with your other 
              information for purposes such as testing and improving your experience at our site and the compilation of broad aggregate 
              demographic data and related usage information for internal purposes and for disclosure to third parties such as advertisers 
              and content partners. This aggregate passive information does not contain any personal information that can identify any 
              individual user.
            </p>

            <h3 className="text-2xl font-semibold text-dark mb-3 mt-6">Creating Assessment Invitations</h3>
            <p>
              When creating assessment invitations on VitalAssess, you provide information directly to the platform and this is considered 
              confidential information. Under NO circumstances does VitalAssess publicize your confidential assessment data or candidate 
              information to any particular company without your explicit consent.
            </p>

            <h3 className="text-2xl font-semibold text-dark mb-3 mt-6">Contacting You by E-Mail</h3>
            <p>
              VitalAssess may use your contact information periodically in order to send you e-mail regarding updates at the VitalAssess 
              site. The frequency of these messages will vary depending upon your profile. In addition, we may send you free informational 
              newsletters or notices relating to topics that may be of special interest to you, including hiring best practices and 
              assessment insights. Finally, if you specifically provide VitalAssess with permission at the time of registration, you may 
              also receive commercial e-mails. Out of respect for the privacy of our users, we present the option to opt-out of receiving 
              many of the newsletters and/or commercial e-mails whenever VitalAssess sends such messages. However certain communications 
              from VitalAssess such as service announcements, administrative messages and the Weekly Newsletter are considered part of 
              VitalAssess membership and you may not opt out of receiving them. E-mail messages from third parties are not governed by the 
              opt-out provisions of this Privacy Policy, but all such third parties are strongly encouraged to include opt-out procedures 
              in their messages to you.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-dark mb-4 mt-8">Sharing of Information</h2>
            <p>
              VitalAssess does not rent, sell, or share personal information about you with other people or nonaffiliated companies except 
              to provide products or services you&apos;ve requested, when we have your permission, or under the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>
                We provide the information to trusted partners who work on behalf of or with VitalAssess under partnership agreements. 
                These companies may use your personal information to help VitalAssess communicate with you about offers from VitalAssess 
                and our marketing partners.
              </li>
              <li>
                We respond to subpoenas, court orders, or legal process, or to establish or exercise our legal rights or defend against 
                legal claims.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-dark mb-4 mt-8">Your Ability to Edit Your Account Information and Preferences</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>We limit access to personal information about you to employees who we believe reasonably need to come into contact with that information to provide products or services to you or in order to do their jobs.</li>
              <li>We have physical, electronic, and procedural safeguards to protect personal information about you.</li>
              <li>Your VitalAssess account Information is password-protected.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-dark mb-4 mt-8">Other Provisions</h2>
            
            <h3 className="text-2xl font-semibold text-dark mb-3 mt-6">Acceptance of Terms / Changes to Privacy Policy</h3>
            <p>
              Your use of this site indicates an acceptance of the terms of the Privacy Policy. VitalAssess reserves the right to update 
              or amend this Privacy Policy at any time.
            </p>

            <h3 className="text-2xl font-semibold text-dark mb-3 mt-6">Third-Party Analytics</h3>
            <p>
              We have contracted with third-party analytics providers to monitor certain pages of our website for the purpose of reporting 
              website traffic, statistics, advertisement &apos;click-throughs&apos;, and/or other activities on our website. Where authorized by us, 
              these providers may use cookies, web beacons, and/or other monitoring technologies to compile anonymous statistics about our 
              website visitors. No personally identifiable information is collected by or transferred to any party other than the authorized 
              service providers. For more information about how the information is collected and used by these providers, please refer to 
              their respective privacy policies.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-dark mb-4 mt-8">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Statement, the practices of our site, or your dealings with our site, please 
              <a href="/contact" className="text-primary hover:underline"> Contact Us</a>. Write to{' '}
              <a href="mailto:admin@vitalassess.in" className="text-primary hover:underline">admin@vitalassess.in</a>
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}

