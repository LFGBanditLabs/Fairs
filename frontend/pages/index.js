import Header from '../components/Header'
import Hero from '../components/Hero'
import ProposalList from '../components/ProposalList'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      <main>
        <Hero />
        <ProposalList />
      </main>
      <Footer />
    </div>
  )
}
