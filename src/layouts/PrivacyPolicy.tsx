export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-center">Privacy Policy</h1>

      <p className="mb-4">
        <strong>Sip Silk</strong> is committed to protecting the privacy of our
        customers. We want you to have an enjoyable and risk-free shopping
        experience. It is important for us to collect certain personal
        information during the process of shopping, and we respect and protect
        your right to privacy as set forth in this Privacy Policy. This Privacy
        Policy applies to <strong>Sip Silk</strong> only and does not apply to
        other websites to which we link.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Note</h2>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>
          Our privacy policy is subject to change at any time without notice. To
          make sure you are aware of any changes, please review this policy
          periodically.
        </li>
        <li>
          By visiting <strong>Sip Silk</strong>, you agree to be bound by the
          terms and conditions of this Privacy Policy.
        </li>
        <li>
          By mere use of the Website, you expressly consent to our use and
          disclosure of your personal information in accordance with this
          Privacy Policy.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">Who We Are</h2>
      <p className="mb-4">
        Our website address is: <strong>https://sipsilk.com</strong>
        {/* Change this URL if needed */}
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Cookies</h2>
      <p className="mb-3">
        If you leave a comment on our site, you may opt-in to saving your name,
        email address, and website in cookies. These are for your convenience so
        that you do not have to fill in your details again when you leave
        another comment. These cookies will last for one year.
      </p>
      <p className="mb-3">
        If you visit our login page, we will set a temporary cookie to determine
        if your browser accepts cookies. This cookie contains no personal data
        and is discarded when you close your browser.
      </p>
      <p className="mb-3">
        When you log in, we will also set up several cookies to save your login
        information and your screen display choices. Login cookies last for two
        days, and screen options cookies last for a year. If you select
        “Remember Me”, your login will persist for two weeks. If you log out of
        your account, the login cookies will be removed.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Embedded Content from Other Websites
      </h2>
      <p className="mb-4">
        Articles on this site may include embedded content (e.g. videos, images,
        articles, etc.). Embedded content from other websites behaves in the
        exact same way as if the visitor has visited the other website. These
        websites may collect data about you, use cookies, embed additional
        third-party tracking, and monitor your interaction with that embedded
        content, including tracking your interaction if you have an account and
        are logged in to that website.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Who We Share Your Data With
      </h2>
      <p className="mb-4">
        If you request a password reset, your IP address will be included in the
        reset email.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        How Long We Retain Your Data
      </h2>
      <p className="mb-3">
        If you leave a comment, the comment and its metadata are retained
        indefinitely. This is so we can recognize and approve any follow-up
        comments automatically instead of holding them in a moderation queue.
      </p>
      <p className="mb-4">
        For users that register on our website, we also store the personal
        information they provide in their user profile. All users can see, edit,
        or delete their personal information at any time (except they cannot
        change their username). Website administrators can also see and edit
        that information.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        What Rights You Have Over Your Data
      </h2>
      <p className="mb-4">
        If you have an account on this site, or have left comments, you can
        request to receive an exported file of the personal data we hold about
        you, including any data you have provided to us. You can also request
        that we erase any personal data we hold about you. This does not include
        any data we are obliged to keep for administrative, legal, or security
        purposes.
      </p>

      <p className="mt-10 text-sm text-gray-500 text-center">
        © {new Date().getFullYear()} Sip Silk. All rights reserved.
      </p>
    </div>
  );
}
