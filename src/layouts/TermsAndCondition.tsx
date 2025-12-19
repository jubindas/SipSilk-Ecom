export default function TermsAndCondition() {
  return (
    <div className="min-h-screen bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Terms & Conditions
        </h1>

        <p className="text-gray-700 leading-relaxed mb-6">
          These Terms govern the use of our website and services. By accessing
          or purchasing from our platform, you agree to these conditions.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Use of Website
        </h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-8">
          <li>You must be at least 18 years old to make purchases.</li>
          <li>
            You agree not to misuse the website, violate security protocols, or
            use our content without permission.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Product Information
        </h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          <li>We aim to provide accurate product details.</li>
          <li>
            Minor variations may occur due to lighting, device display
            differences, or natural handloom characteristics in:
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Color</li>
              <li>Texture</li>
              <li>Fabric pattern</li>
              <li>Packaging</li>
            </ul>
          </li>
        </ul>

        <p className="text-gray-700 leading-relaxed mt-3 mb-8">
          Handloom products (especially Sualkuchi textiles) may have slight
          irregularities, which are natural and should not be considered
          defects.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Pricing & Payment
        </h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-8">
          <li>All prices are listed in INR.</li>
          <li>Prices may change without prior notice.</li>
          <li>Payments must be completed through approved payment gateways.</li>
          <li>COD availability depends on serviceable PIN codes.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Shipping & Delivery
        </h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
          <li>
            Shipping is handled through Shiprocket and its courier partners.
          </li>
          <li>
            Delivery timelines are estimates and may vary due to external
            factors.
          </li>
        </ul>

        <p className="text-gray-700 mb-8">
          Please refer to our{" "}
          <span className="font-semibold">Shipping Policy</span> for complete
          details.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Cancellations, Returns & Refunds
        </h2>
        <p className="text-gray-700 leading-relaxed mb-8">
          All cancellations, returns, and refunds are covered under our
          <span className="font-semibold"> Refund & Return Policy</span>.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Intellectual Property
        </h2>
        <p className="text-gray-700 leading-relaxed mb-8">
          All images, logos, text, and content on this website are the property
          of our brand. They may not be reproduced, copied, or used without
          written permission.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Limitation of Liability
        </h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-8">
          <li>We are not responsible for delays caused by courier partners.</li>
          <li>
            We are not liable for incorrect or incomplete addresses provided by
            the customer.
          </li>
          <li>
            We are not responsible for loss or damage after delivery is
            completed.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Governing Law
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          All disputes are subject to the jurisdiction of Guwahati courts only.
        </p>
      </div>
    </div>
  );
}
