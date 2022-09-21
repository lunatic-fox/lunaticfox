import Page from '../../components/Page';
import Loading from '../../components/Loading';
import CardList from './components/CardList';

const DPage = () => {
  return (
    <Page>
      <Loading timeDelay={3.5e3}/>
      <CardList/>
    </Page>
  );
};

export default DPage;
