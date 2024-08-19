import { FC } from "react"
import Header from "./header"
import Content from "./main"
import Mastery from "../pages/mastery"
import Footer from "./footer"
import Navigation from "./nav"
import { Route, Routes } from "react-router-dom"
import Program from "../pages/program"
import Location from "../pages/location"
import Screen from "./screen"
import Checkin from "@/pages/checkin"

const Cabinet:FC = () => {
    return (
    <Screen>
      <Header />
      <Content>
        <Routes>
            <Route path='/' element={<Mastery/>} />
            <Route path='/program' element={<Program/>} />
            <Route path='/location' element={<Location/>} />
            <Route path='/check-in' element={<Checkin/>} />
        </Routes>
      </Content>
      <Footer>
       <Navigation />
      </Footer> 
    </Screen>)
}

export default Cabinet