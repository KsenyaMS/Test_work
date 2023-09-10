import React, {useState} from "react";
import PersonData from "./PersonData";
import { Divider, Layout, PageHeader } from "antd";
import PageMenu from "./PageMenu";
import "./DriverCard.css"
import { Content, Footer, Header } from "antd/lib/layout/layout";
export default function DriverCard() {

  return (
    <>
      <Layout className="page-layout">
        <Header className="header">
          <PageHeader style={{padding: 5}} title="Карточка водителя"/>
          <Divider style={{marginTop: '10px'}}/>
        </Header>
        <Content style={{margin: '8px'}}>
          <PersonData />
          <Divider />
          <PageMenu />
        </Content>
        <Footer className="footer" style={{textAlign: 'right', fontSize: '0.8em'}}>Тестовое задание 2021</Footer>
      </Layout>
    </>
  );
}
