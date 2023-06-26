import { Link } from 'react-router-dom';
import { HeaderContainer } from '../style';
import { BlueButton } from '../../../common/style';
import FilterButtons from './FilterButtons';
import { IUserInfo } from '../../../common/model/UserInfo';
import { pageInfo } from '../../../common/type';

const Header = ({
  pageInfo,
  user,
}: {
  pageInfo: pageInfo;
  user: IUserInfo;
}) => {
  return (
    <HeaderContainer>
      <section>
        <h2>All Questions</h2>
        <Link
          to={user.memberId ? `/ask/${user.memberId}/${user.name}` : '/login'}
        >
          <BlueButton>Ask Question</BlueButton>
        </Link>
      </section>
      <section>
        <p>{`${
          pageInfo.totalElements ? pageInfo.totalElements : '0'
        } questions`}</p>
        <FilterButtons />
      </section>
    </HeaderContainer>
  );
};

export default Header;
