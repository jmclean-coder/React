export default function Tabs({ children, buttons, ButtonsContainer = 'menu' }) {

    // two different slots!!
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
