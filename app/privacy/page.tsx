'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const PrivacyPage = () => {
  return (
    <div className="pt-32 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-[#2f2f2f] mb-6 text-center">Privacy Policy</h1>
          <p className="text-[#6a6a6a] mb-8 text-center">Last updated: January 1, 2023</p>

          <div className="prose prose-lg max-w-none">
            <p>
              At Furni, accessible from www.furni.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Furni and how we use it.
            </p>
            <p>
              If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
            </p>

            <h2>Information We Collect</h2>
            <p>
              When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.
            </p>
            <p>
              We collect information from you when you register on our site, place an order, subscribe to our newsletter, respond to a survey, fill out a form, or enter information on our site.
            </p>

            <h2>How We Use Your Information</h2>
            <p>
              We use the information we collect in various ways, including to:
            </p>
            <ul>
              <li>Provide, operate, and maintain our website</li>
              <li>Improve, personalize, and expand our website</li>
              <li>Understand and analyze how you use our website</li>
              <li>Develop new products, services, features, and functionality</li>
              <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
              <li>Send you emails</li>
              <li>Find and prevent fraud</li>
            </ul>

            <h2>Log Files</h2>
            <p>
              Furni follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.
            </p>

            <h2>Cookies and Web Beacons</h2>
            <p>
              Like any other website, Furni uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
            </p>
            <p>
              For more general information on cookies, please read <a href="https://www.cookieconsent.com/what-are-cookies/" className="text-[#3b5d50] hover:underline" target="_blank" rel="noopener noreferrer">"What Are Cookies"</a>.
            </p>

            <h2>Google DoubleClick DART Cookie</h2>
            <p>
              Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.website.com and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL – <a href="https://policies.google.com/technologies/ads" className="text-[#3b5d50] hover:underline" target="_blank" rel="noopener noreferrer">https://policies.google.com/technologies/ads</a>
            </p>

            <h2>Our Advertising Partners</h2>
            <p>
              Some of advertisers on our site may use cookies and web beacons. Our advertising partners are listed below. Each of our advertising partners has their own Privacy Policy for their policies on user data. For easier access, we hyperlinked to their Privacy Policies below.
            </p>
            <ul>
              <li>
                <p>Google</p>
                <p><a href="https://policies.google.com/technologies/ads" className="text-[#3b5d50] hover:underline" target="_blank" rel="noopener noreferrer">https://policies.google.com/technologies/ads</a></p>
              </li>
            </ul>

            <h2>Third Party Privacy Policies</h2>
            <p>
              Furni's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
            </p>
            <p>
              You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.
            </p>

            <h2>Children's Information</h2>
            <p>
              Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.
            </p>
            <p>
              Furni does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.
            </p>

            <h2>Online Privacy Policy Only</h2>
            <p>
              This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Furni. This policy is not applicable to any information collected offline or via channels other than this website.
            </p>

            <h2>Consent</h2>
            <p>
              By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.
            </p>

            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately, after they are posted on this page.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us.
            </p>
            <ul>
              <li>By email: privacy@furni.com</li>
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

export default PrivacyPage;