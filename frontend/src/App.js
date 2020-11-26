import { Layout } from 'antd';
import 'antd/dist/antd.css';
import './App.css';
import AppHeader from './components/AppHeader';
import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';
const { Header, Content, Footer } = Layout;
function App() {
  return (
    <Layout className="App">
      <AppHeader />
      <Content>
        <Layout>

        <Sidebar />
        <MainContent />
        </Layout>
      </Content>
      
    </Layout>
  );
}

export default App;
