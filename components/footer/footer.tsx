import { NAV_LINK } from '@/types';
import Link from 'next/link';

interface IFooter {
  links: NAV_LINK[];
}

const Footer: React.FC<IFooter> = ({ links }) => {
  return (
    <div>
      <hr />
      <div className="flex justify-center items-center py-4">
      </div>
    </div>
  );
};

export default Footer;
