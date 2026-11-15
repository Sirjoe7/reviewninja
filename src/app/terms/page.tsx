import Link from "next/link";
import type { Metadata } from "next";
import { site, siteHost } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for ReviewNinja independent book reading and editorial feedback services.",
};

export default function Page() {
  return (
    <main className="terms">
      <div className="wrap">

<Link className="back" href="/">Back to home</Link>
<h1>ReviewNinja Terms of Service</h1>
<p className="mute">Effective Date: November 15, 2026</p>
<h2>1. Introduction</h2>
<p>Welcome to ReviewNinja. These Terms of Service govern your access to and use of the ReviewNinja website and the services we provide.</p>
<p>By accessing our website or engaging our services, you agree to these terms. Please read them carefully before submitting an enquiry or purchasing a service.</p>
<p>If you do not agree with these terms, please do not use our services.</p>
<h2>2. About Our Services</h2>
<p>ReviewNinja provides independent book reading, reader feedback, and editorial assessment services for authors, independent publishers, and other individuals involved in book publishing.</p>
<p>Our services are designed to provide authors with independent perspectives on their published or unpublished work.</p>
<p>Our services may include:</p>
<ul><li>Independent reading of submitted books.</li><li>Reader feedback and observations.</li><li>Editorial assessments.</li><li>Feedback on readability, structure, clarity, and reader engagement.</li></ul>
<p>ReviewNinja does not operate as an Amazon service provider and is not affiliated with, endorsed by, or sponsored by Amazon or Amazon Kindle Direct Publishing.</p>
<h2>3. Pricing and Payments</h2>
<p>Our standard pricing is <strong>$10 per 100 pages.</strong></p>
<p>The final price is calculated according to the total number of pages in the submitted book.</p>
<p>For example:</p>
<ul><li>100 pages: $10</li><li>200 pages: $20</li><li>300 pages: $30</li><li>500 pages: $50</li></ul>
<p>All prices are displayed in United States Dollars (USD).</p>
<p>The final price and scope of work will be confirmed with the customer before work begins.</p>
<p>Any additional services or changes to the original agreement will be discussed and approved separately.</p>
<p>Payment arrangements will be communicated before a project begins.</p>
<h2>4. Customer Responsibilities</h2>
<p>By using ReviewNinja’s services, you agree to:</p>
<ul><li>Provide accurate contact and book information.</li><li>Ensure you have the necessary rights or authorization to share the submitted material.</li><li>Provide accessible and readable copies of your book where required.</li><li>Communicate any specific expectations or requirements before work begins.</li><li>Respect our service guidelines and intellectual property rights.</li></ul>
<p>You are responsible for ensuring that any material submitted to ReviewNinja does not violate the rights of another person or organization.</p>
<h2>5. Independent Feedback and Amazon Reviews</h2>
<p>ReviewNinja’s paid services cover independent reading, reader feedback, and editorial assessments.</p>
<p>We do not sell Amazon customer reviews, guarantee positive ratings, or offer compensation in exchange for publishing customer reviews.</p>
<p>Payment for our services does not influence the opinions expressed in our assessments.</p>
<p>Any decision by an individual to publish a review on Amazon or another platform must be entirely voluntary and independent of any payment or other incentive.</p>
<p>ReviewNinja does not guarantee that a book will receive reviews, ratings, sales, rankings, or increased visibility on Amazon or any other publishing platform.</p>
<h2>6. Intellectual Property and Copyright</h2>
<p>Authors retain ownership of their books, manuscripts, and original written content.</p>
<p>By submitting a book to ReviewNinja, you grant us limited permission to access, read, and assess the material solely for the purpose of delivering the agreed service.</p>
<p>ReviewNinja does not claim ownership of submitted books or manuscripts.</p>
<p>We will not knowingly reproduce, distribute, publish, or sell your submitted material without your permission.</p>
<p>All website content, branding, design elements, and original materials belonging to ReviewNinja remain our intellectual property unless otherwise stated.</p>
<h2>7. Confidentiality</h2>
<p>ReviewNinja understands the importance of protecting unpublished manuscripts and commercially sensitive material.</p>
<p>Information and documents submitted to us will be used only for the purpose of providing the requested service and managing the customer relationship.</p>
<p>We will not knowingly disclose submitted manuscripts or customer information to unauthorized third parties.</p>
<p>However, confidentiality cannot be guaranteed against circumstances beyond our reasonable control, including security incidents or legal obligations.</p>
<h2>8. Cancellations and Refunds</h2>
<p>Customers who wish to cancel a service should contact ReviewNinja as soon as possible.</p>
<p>If a cancellation request is received before work begins, we will review the request and arrange an appropriate refund where payment has already been made.</p>
<p>Once work has started, refunds will be assessed based on the work already completed and the circumstances of the cancellation.</p>
<p>If ReviewNinja is unable to deliver an agreed service, we will communicate with the customer and arrange an appropriate resolution, which may include a refund.</p>
<p>Any specific refund arrangement agreed with a customer will be communicated before work begins.</p>
<h2>9. Service Availability and Limitations</h2>
<p>ReviewNinja aims to provide reliable and professional services. However, we do not guarantee uninterrupted website availability or that every enquiry will result in an accepted project.</p>
<p>Delivery timelines will be communicated individually and may depend on book length, workload, and the agreed scope of work.</p>
<p>We reserve the right to decline requests that fall outside our services or violate applicable laws, platform policies, or these terms.</p>
<h2>10. Limitation of Liability</h2>
<p>Our feedback and assessments are provided for informational and editorial purposes.</p>
<p>ReviewNinja does not guarantee commercial success, publishing outcomes, increased book sales, improved rankings, or any particular reader response.</p>
<p>To the extent permitted by applicable law, we are not responsible for indirect losses arising from the use of our services.</p>
<p>Nothing in these terms excludes liability that cannot legally be excluded under applicable law.</p>
<h2>11. Changes to These Terms</h2>
<p>ReviewNinja reserves the right to update these Terms of Service when necessary.</p>
<p>Updated versions will be published on this website with a revised effective date.</p>
<p>Continued use of our website and services after changes take effect constitutes acceptance of the updated terms, to the extent permitted by applicable law.</p>
<h2>12. Governing Law</h2>
<p>These Terms of Service shall be governed by the applicable laws of Kenya, without excluding any mandatory consumer protection or other legal rights that apply in the customer’s jurisdiction.</p>
<p>Any disputes arising from the use of ReviewNinja’s services will be handled in accordance with applicable law.</p>
<h2>13. Contact Information</h2>
<p>If you have questions about these Terms of Service, please contact us:</p>
<p><strong>Business Name:</strong> ReviewNinja<br /><strong>Email:</strong> {site.email}<br /><strong>Website:</strong> {siteHost}</p>

      </div>
    </main>
  );
}
