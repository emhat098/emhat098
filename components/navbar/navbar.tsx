'use client';

const Navbar = () => {
  return (
    <nav
      className={
        'flex flex-row gap-4 justify-between items-center text-sm px-12 py-8 shadow'
      }
    >
      <div className={'flex flex-row gap-4 items-center'}>
        <div className={'font-mono text-2xl'}>Em Ha Tuan</div>
        <ul className={'flex flex-row gap-4'}>
          <li>Home</li>
          <li>Blog</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div>
        <form>
          <input
            className={
              'border shadow py-2 px-4 focus:outline-none focus:shadow-xl focus:rounded-xl text-lg'
            }
          />
          <button>Search</button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
