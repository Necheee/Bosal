const Home = () => {
  return (
    <div>
      <section className="min-h-[80vh] flex items-center justify-center bg-bosal-deep-green text-bosal-beige">
        <div className="text-center space-y-6 px-4">
          <h1 className="text-5xl md:text-7xl font-display font-bold">
            Experience Nigerian<br/>Culinary Excellence
          </h1>
          <p className="text-lg md:text-xl font-sans max-w-2xl mx-auto text-bosal-beige/80">
            A premium dining destination in Hilltop, Nsukka, offering vibrant, contemporary takes on traditional flavors.
          </p>
        </div>
      </section>
      
      {/* Placeholder for future sections */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-display font-bold mb-4">Phase 1 Foundation Complete</h2>
          <p className="text-bosal-deep-green/70">The underlying structure is ready. Phase 2 will build out this homepage.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;

