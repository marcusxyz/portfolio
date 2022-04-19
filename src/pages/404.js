import React from "react"
import Layout from "../components/Layout/Layout"
import Seo from "../components/Seo/Seo"
import SectionTitle from "../components/SectionTitle/SectionTitle"

const NotFound = () => {
  return (
    <div>
      <Layout>
        <Seo
          title="(404) Page not found"
          description="I'm Marcus Hägerstrand, a UI/UX Designer and developer with a passion for
          simplistic, user-friendly design and animations"
        />
        <SectionTitle
          title="404"
          text="Page not found — Please use the navigation bar to access the content you are looking for."
        />
      </Layout>
    </div>
  )
}
export default NotFound
