import React from 'react'
import MLSHeader from './components/MLSHeader/MLSHeader';
import RecResources from './components/RecResources/RecResources';

client

const subjects = [
  { name: 'Immunohematology', description: 'The study of antigen-antibody reactions associated with blood transfusions', href: '#', icon: ChartPieIcon },
  { name: 'Immunology', description: 'The study of the immune system', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Microbiology', description: 'The study of the biology of microscopic organisms', href: '#', icon: FingerPrintIcon },
  { name: 'Hematology', description: 'The study of blood and blood disorders', href: '#', icon: SquaresPlusIcon },
  { name: 'Urinalysis', description: 'The study of urine and other bodily fluids', href: '#', icon: ArrowPathIcon },
  { name: 'Clinical Chemistry', description: 'The study of analysis of chemical substances within the body', href: '#', icon: ArrowPathIcon },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

  export default function App() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
main

function App() {
  return (
    <>
      <MLSHeader />
      <RecResources />
    </>
  );
}

export default App;
