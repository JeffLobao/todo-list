import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import { styled } from "styled-components";

const HeaderContainer = styled.header``;

const Header = () => {
    return ( 
        <HeaderContainer className="flex gap-3 bg-primary px3 md:px-6 py-3 align-items-center" >
            <div className="logo">LOGO</div>
            <IconField iconPosition="right" className="w-full md:w-4">
                <InputIcon className="pi pi-search cursor-pointer"  />
                <InputText placeholder="Buscar" className="w-full"/>
            </IconField>
        </HeaderContainer>
     );
}
 
export default Header;