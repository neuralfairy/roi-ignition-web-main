import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto max-w-4xl px-4 py-16">
        <h1 className="mb-4 text-4xl font-bold">Privacy Policy</h1>
        <p className="mb-10 text-muted-foreground">
          This policy describes privacy-related behavior visible in the current
          UberPeopleSearch Solutions website code. It does not describe
          processing performed by services configured outside this codebase.
        </p>

        <div className="space-y-8">
          <section className="space-y-3">
            <h2 className="text-2xl font-semibold">Contact page information</h2>
            <p className="text-muted-foreground">
              The Contact page displays fields for your name, email address,
              phone number, company, company size, inquiry type, and message.
              In the current site code, these fields do not have a submission
              handler or a request that sends them to a server. The page
              therefore does not confirm that a message has been received.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold">Analytics and tags</h2>
            <p className="text-muted-foreground">
              The site loads Google Tag Manager using container ID
              GTM-KT8CFBQT. The tags and data practices configured in that
              container are maintained outside this codebase, so this policy
              cannot identify what those tags collect or how they use it.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold">Links to other websites</h2>
            <p className="text-muted-foreground">
              The site footer includes a link to Salescentri. Following that
              link takes you to an external website, which is not controlled by
              this site. Its own privacy practices apply there. The link
              includes source, medium, and campaign query parameters.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold">Contact</h2>
            <p className="text-muted-foreground">
              The website lists hello@uberpeoplesearch.com as its contact email.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;