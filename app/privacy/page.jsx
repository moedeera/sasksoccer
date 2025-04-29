import Link from "next/link";
import React from "react";

export const page = () => {
  return (
    // eslint-disable-next-line react/no-unescaped-entities
    <div className="component-container">
      <div className="privacy-policy">
        <h1>Privacy Policy</h1>
        <p>
          <strong>Effective Date:</strong> January 1 2025
        </p>

        <h2>Introduction</h2>
        <p>
          This Privacy Policy explains how we collect, use, and protect your
          personal information when you visit our website or use our services.
        </p>
        <p>
          By using our website, you agree to the terms of this Privacy Policy.
        </p>

        <h2>1. Information We Collect</h2>
        <h3>a. Information You Provide:</h3>
        <ul>
          <li>
            When you create an account using Google login, we collect your email
            address and profile name.
          </li>
          <li>
            No additional personal details, such as photos or game statistics,
            are collected.
          </li>
        </ul>
        <h3>b. Automatic Information:</h3>
        <ul>
          <li>
            We may collect technical data such as your IP address, browser type,
            and operating system for analytics purposes to improve the
            functionality of this website.
          </li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <ul>
          <li>
            To allow you to monitor league standings and tournament schedules.
          </li>
          <li>
            To enhance your browsing experience by understanding user
            preferences.
          </li>
          <li>To improve the overall quality and security of our website.</li>
        </ul>
        <p>
          We do not use your information for targeted advertising, and no
          identifiable information is shared with third parties for marketing
          purposes.
        </p>

        <h2>3. How We Protect Your Information</h2>
        <p>
          We implement robust security measures to protect your data, including:
        </p>
        <ul>
          <li>Secure server connections (SSL).</li>
          <li>
            Limited access to data, accessible only to authorized personnel.
          </li>
          <li>
            Regular monitoring and updates to prevent unauthorized access.
          </li>
        </ul>

        <h2>4. Sharing Your Information</h2>
        <p>
          We do not sell, rent, or trade your personal information. We only
          share data when required by law or to protect the rights, property, or
          safety of our website, users, or others.
        </p>

        <h2>5. Third-Party Services</h2>
        <p>
          Our website uses Google for account login purposes. By logging in via
          Google, you agree to Google privacy policies. We do not have access to
          your password or other sensitive Google account data.
        </p>
        <p>
          For more information about Google privacy policy, please visit{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Privacy Policy
          </a>
          .
        </p>

        <h2>6. Cookies</h2>
        <p>
          We use cookies to enhance your browsing experience and gather
          statistical data about website traffic. Cookies do not contain
          personally identifiable information.
        </p>
        <p>
          You can disable cookies in your browser settings; however, this may
          impact some website functionalities.
        </p>

        <h2>7. Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access the data we collect about you.</li>
          <li>Request deletion of your account and associated data.</li>
          <li>
            Opt-out of data collection for analytics by adjusting your browser
            settings or contacting us.
          </li>
        </ul>

        <h2>8. Children</h2>
        <p>
          Our website is intended for adult users interested in soccer leagues
          and tournaments. We do not knowingly collect information from children
          under 13.
        </p>

        <h2>9. Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Changes will be
          posted on this page with an updated effective date.
        </p>

        <h2>10. Contact Us</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy,
          please contact us at:
        </p>
        <p>
          <Link href={"/contact"}>message us </Link>
        </p>

        <p>
          Thank you for visiting Sasksoccerhub! We value your privacy and are
          committed to providing a secure and informative platform for soccer
          enthusiasts in Saskatoon.
        </p>
      </div>
    </div>
  );
};
