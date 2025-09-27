'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const TermsPage = () => {
  return (
    <div className="pt-32 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-[#2f2f2f] mb-6 text-center">Terms and Conditions</h1>
          <p className="text-[#6a6a6a] mb-8 text-center">Last updated: January 1, 2023</p>

          <div className="prose prose-lg max-w-none">
            <h2>1. Introduction</h2>
            <p>
              Welcome to Furni ("Company", "we", "our", "us")! These Terms of Service ("Terms", "Terms of Service") govern your use of our website located at www.furni.com ("Service") operated by Furni.
            </p>
            <p>
              Our Privacy Policy also governs your use of our Service and explains how we collect, safeguard and disclose information that results from your use of our web pages. Please read it here: <Link href="/privacy" className="text-[#3b5d50] hover:underline">Privacy Policy</Link>.
            </p>
            <p>
              By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.
            </p>

            <h2>2. Communications</h2>
            <p>
              By creating an Account on our Service, you agree to subscribe to newsletters, marketing or promotional materials and other information we may send. However, you may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or instructions provided in any email we send.
            </p>

            <h2>3. Purchases</h2>
            <p>
              If you wish to purchase any product or service made available through the Service ("Purchase"), you may be asked to supply certain information relevant to your Purchase including, without limitation, your credit card number, the expiration date of your credit card, your billing address, and your shipping information.
            </p>
            <p>
              You represent and warrant that: (i) you have the legal right to use any credit card(s) or other payment method(s) in connection with any Purchase; and that (ii) the information you supply to us is true, correct and complete.
            </p>
            <p>
              The service may employ the use of third-party services for the purpose of facilitating payment and the completion of Purchases. By submitting your information, you grant us the right to provide the information to these third parties subject to our Privacy Policy.
            </p>
            <p>
              We reserve the right to refuse or cancel your order at any time for reasons including but not limited to: product or service availability, errors in the description or price of the product or service, error in your order or other reasons.
            </p>

            <h2>4. Refunds</h2>
            <p>
              We issue refunds for Contracts within 30 days of the original purchase of the Contract.
            </p>

            <h2>5. Content</h2>
            <p>
              Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material ("Content"). You are responsible for the Content that you post on or through the Service, including its legality, reliability, and appropriateness.
            </p>
            <p>
              By posting Content on or through the Service, You represent and warrant that: (i) the Content is yours (you own it) and/or you have the right to use it and the right to grant us the rights and license as provided in these Terms, and (ii) that the posting of your Content on or through the Service does not violate the privacy rights, publicity rights, copyrights, contract rights or any other rights of any person or entity.
            </p>

            <h2>6. Prohibited Uses</h2>
            <p>
              You may use the Service only for lawful purposes and in accordance with Terms. You agree not to use the Service:
            </p>
            <ul>
              <li>In any way that violates any applicable national or international law or regulation.</li>
              <li>For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way by exposing them to inappropriate content or otherwise.</li>
              <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail", "chain letter," "spam," or any other similar solicitation.</li>
              <li>To impersonate or attempt to impersonate Company, a Company employee, another user, or any other person or entity.</li>
              <li>In any way that infringes upon the rights of others, or in any way is illegal, threatening, fraudulent, or harmful, or in connection with any unlawful, illegal, fraudulent, or harmful purpose or activity.</li>
            </ul>

            <h2>7. Analytics</h2>
            <p>
              We may use third-party Service Providers to monitor and analyze the use of our Service.
            </p>

            <h2>8. Accounts</h2>
            <p>
              When you create an account with us, you guarantee that you are above the age of 18, and that the information you provide us is accurate, complete, and current at all times. Inaccurate, incomplete, or obsolete information may result in the immediate termination of your account on the Service.
            </p>
            <p>
              You are responsible for maintaining the confidentiality of your account and password, including but not limited to the restriction of access to your computer and/or account. You agree to accept responsibility for any and all activities or actions that occur under your account and/or password, whether your password is with our Service or a third-party service. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
            </p>

            <h2>9. Intellectual Property</h2>
            <p>
              The Service and its original content (excluding Content provided by users), features and functionality are and will remain the exclusive property of Furni and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Furni.
            </p>

            <h2>10. Copyright Policy</h2>
            <p>
              We respect the intellectual property rights of others. It is our policy to respond to any claim that Content posted on the Service infringes on the copyright or other intellectual property rights ("Infringement") of any person or entity.
            </p>

            <h2>11. Changes To Service</h2>
            <p>
              We reserve the right to withdraw or amend our Service, and any service or material we provide via the Service, in our sole discretion without notice. We will not be liable if for any reason all or any part of the Service is unavailable at any time or for any period. From time to time, we may restrict access to some parts of the Service, or the entire Service, to users, including registered users.
            </p>

            <h2>12. Amendments To Terms</h2>
            <p>
              We may amend these Terms at any time by posting the amended terms on this site. It is your responsibility to review these Terms periodically.
            </p>

            <h2>13. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
            </p>
            <p>
              Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service and supersede and replace any prior agreements we might have had between us regarding the Service.
            </p>

            <h2>14. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us:
            </p>
            <ul>
              <li>By email: support@furni.com</li>
              <li>By phone: +1 (555) 123-4567</li>
              <li>By mail: 123 Furniture Street, Design District, NY 10001, United States</li>
            </ul>
          </div>

          <div className="mt-8 text-center">
            <Link href="/" className="inline-block bg-[#3b5d50] text-white px-6 py-3 rounded-md hover:bg-[#314d43] transition-colors duration-300">
              Back to Home
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsPage;