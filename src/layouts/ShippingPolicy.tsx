export default function ShippingPolicy() {
  return (
    <div className="min-h-screen bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Shipping Policy
        </h1>

        <p className="text-gray-700 leading-relaxed mb-6">
          Thank you for shopping with us. We aim to deliver your order safely
          and on time. Please read our Shipping Policy to understand how we
          process, ship, and deliver your products.
        </p>

        {/* Shipping Partner */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Shipping Partner
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          We have partnered with Shiprocket, India’s leading logistics
          aggregator, to ensure reliable and efficient delivery. Shiprocket
          automatically assigns the most suitable courier partner (such as
          Delhivery, Bluedart, Shadowfax, Xpressbees, etc.) based on your
          delivery location and service availability.
        </p>

        {/* Order Processing */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Order Processing Time
        </h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-6">
          <li>
            All orders are processed within 1–2 business days after payment
            confirmation.
          </li>
          <li>
            Customised orders will be processed as per the discussed timeline
            after payment confirmation.
          </li>
          <li>
            Orders placed on weekends or public holidays will be processed on
            the next working day.
          </li>
          <li>
            You will receive tracking details via SMS/Email/WhatsApp once your
            order is dispatched.
          </li>
        </ul>

        {/* Delivery Timeline */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Shipping Time & Delivery
        </h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-6">
          <li>
            Standard delivery timeline: 5–10 business days depending on your PIN
            code and courier availability.
          </li>
          <li>Remote or rural areas may take longer.</li>
          <li>
            Unexpected delays may occur due to weather, strikes, or operational
            courier issues.
          </li>
        </ul>

        {/* Shipping Charges */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Shipping Charges
        </h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-6">
          <li>
            Shipping charges are calculated at checkout based on weight,
            destination PIN code, and courier service.
          </li>
          <li>
            Free shipping may be offered during promotions or above a certain
            order value.
          </li>
        </ul>

        {/* Order Tracking */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Order Tracking
        </h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-6">
          <li>
            You will receive a Shiprocket tracking link once your order is
            shipped.
          </li>
          <li>
            You can track your order on the courier partner website or
            Shiprocket portal.
          </li>
        </ul>

        {/* COD */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Cash on Delivery (COD)
        </h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-6">
          <li>COD is available only in serviceable PIN codes.</li>
          <li>Additional COD charges may apply.</li>
          <li>
            Orders with invalid addresses or repeated COD refusals may be
            cancelled.
          </li>
        </ul>

        {/* RTO / Non-delivery */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Non-Delivery, Reattempts & RTO
        </h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          <li>
            If the courier cannot deliver due to incorrect address, unreachable
            customer, or refusal, an NDR (Non-Delivery Report) is generated.
          </li>
          <li>Couriers usually attempt delivery 2–3 times.</li>
          <li>
            If undelivered, the shipment is returned to us (RTO – Return to
            Origin).
          </li>
        </ul>

        <ul className="list-disc ml-10 text-gray-700 space-y-1 mb-6">
          <li>Shipping charges are non-refundable.</li>
          <li>
            Reshipping can be arranged by collecting the shipping fee again.
          </li>
        </ul>

        {/* Packaging */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Packaging & Dispatch
        </h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-6">
          <li>
            All products are securely packed to prevent damage during transit.
          </li>
          <li>We follow Shiprocket-approved packaging guidelines.</li>
          <li>
            Any tampering must be reported immediately with photo/video proof.
          </li>
        </ul>

        {/* International Shipping */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          International Shipping (If Applicable)
        </h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-6">
          <li>
            Delivery timelines, shipping rates, and customs duties vary by
            destination.
          </li>
          <li>
            Customers are responsible for customs/import taxes, if applicable.
          </li>
        </ul>

        {/* Delays */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Delivery Delays
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          We are not responsible for courier delays caused by weather, natural
          disasters, holidays, or other factors beyond our control. However, we
          will assist you in tracking and coordinating with Shiprocket support.
        </p>

        {/* Policy Updates */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Changes to Shipping Policy
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          We reserve the right to update or modify this Shipping Policy at any
          time. Changes will be effective immediately and reflected on this
          page.
        </p>
      </div>
    </div>
  );
}
