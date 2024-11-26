import Section from './section';

const ILove = () => {
  return (
    <Section title={`> I 🩵 :`}>
      <div className={'flex flex-col gap-4 p-2'}>
        <p className={'indent-4 text-justify w-full font-semibold'}>
          {'Beach, seafood, Đen Vâu, coding, photography, gym, and books.'}
        </p>
      </div>
    </Section>
  );
};

export default ILove;
