import { Dna } from 'react-loader-spinner';

import './Loader.css';

export const Loader = () => {
  return (
    <div className="loaderWrap">
      <Dna
        visible={true}
        height="320"
        width="320"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>
  );
};

export default Loader;
