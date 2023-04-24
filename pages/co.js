import { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import Meta from '../src/infra/Meta';
import members from '../data/members';

// components
import MemberCard from '../src/components/MemberCard';

const CO = () => {

    const [activeItem, setActiveItem] = useState('Todos');

    function renderActiveItem() {
        if (activeItem === 'Todos') {
            return (
                members.map(function(member, key) {
                    return (
                        <div className="card-container" key={key}>
                            <MemberCard name={member.name} image={member.image} departments={member.departments} />
                        </div>
                    );
                })

            )
        } else {
            const sectorMembers = members.filter(member => member.departments.includes(activeItem))
            return (
                sectorMembers.map(function(member, key) {
                    return (
                        <div className="card-container" key={key}>
                            <MemberCard name={member.name} image={member.image} departments={member.departments} />
                        </div>
                    );
                })
            )
        }
    }

    return (
        <>
            <Meta title='SSI 2023 | CO' />

            <BackgroundWrapper>
                <COSectionWrapper>
                    <h3>As pessoas que fizeram deste evento uma realidade</h3>

                    <SubMenu id="departaments-filter-nav">
                        <ul>
                            <Link href="#members">
                                <NavItem active={activeItem === 'Todos'} onClick={() => setActiveItem('Todos')}>Todos</NavItem>
                            </Link>
                            <Link href="#members">
                                <NavItem active={activeItem === 'Comercial e Financeiro'} onClick={() => setActiveItem('Comercial e Financeiro')}>
                                    Comercial e Financeiro</NavItem>
                            </Link>
                            <Link href="#members">
                                <NavItem active={activeItem === 'Criação e Comunicação'} onClick={() => setActiveItem('Criação e Comunicação')}>
                                    Criação e Comunicação</NavItem>
                            </Link>
                            <Link href="#members">
                                <NavItem active={activeItem === 'CTF'} onClick={() => setActiveItem('CTF')}>
                                    CTF</NavItem>
                            </Link>
                            <Link href="#members">
                                <NavItem active={activeItem === 'Diretoria'} onClick={() => setActiveItem('Diretoria')}>
                                    Diretoria</NavItem>
                            </Link>
                            <Link href="#members">
                                <NavItem active={activeItem === 'Infraestrutura'} onClick={() => setActiveItem('Infraestrutura')}>
                                    Infraestrutura</NavItem>
                            </Link>
                            <Link href="#members">
                                <NavItem active={activeItem === 'Palestrantes'} onClick={() => setActiveItem('Palestrantes')}>
                                    Palestrantes</NavItem>
                            </Link>
                            <Link href="#members">
                                <NavItem active={activeItem === 'Patrocínios'} onClick={() => setActiveItem('Patrocínios')}>
                                    Patrocínios</NavItem>
                            </Link>
                            <Link href="#members">
                                <NavItem active={activeItem === 'Site'} onClick={() => setActiveItem('Site')}>Site</NavItem>
                            </Link>
                        </ul>
                    </SubMenu>

                    <MemberCardsWrapper id="members">
                        {renderActiveItem()}
                    </MemberCardsWrapper>
                    
                </COSectionWrapper>
            </BackgroundWrapper>
        </>
    )
}

export default CO;


const COSectionWrapper = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 10rem;
    padding-top: 50px;

    h3 {
        margin: 5rem 0 8rem;
        font-size: 48px;
        font-weight: bold;
        padding: 0 20px 0;
        line-height: 48px;
        text-align: center;
        max-width: 800px;
    }

    .card-container {
        margin: 0 29px 65px;
    }

    @media (min-width:660px) {
        
        .card-container {
            margin: 3rem 29px auto;
        }
    }
`

const SubMenu = styled.nav`
    margin-bottom: 30px;

    ul {
        list-style-type: none;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-flow: wrap;
    }

    @media (min-width:800px) {
        margin-bottom: 0;
    }
`

const NavItem = styled.li`
    --glow-item: 0px 0px 16px 12px rgba(121, 61, 174, 0.5);

    font-size: 20px;
    font-weight: 500;
    padding: 14px 26px;
    margin: 0 18px 40px;
    text-align: center;
    cursor: pointer;
    background-color:  ${props => props.active === true ? '#8744C2' : '#1B162C'};
    color: white;
    border-radius: 100px;
    border: 2px solid transparent;
    transform-style: preserve-3d;
    transition: 0.3s;
    z-index: 2;

    :hover {
        border: solid 2px #8744C2;
        box-shadow: var(--glow-item);
    }
`

const MemberCardsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-flow: wrap;
    align-items: center;
    justify-content: center;
    padding-top: 30px;

    @media (min-width:800px) {
        flex-direction: row;
        max-width: 1400px;
    }
`

const BackgroundWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`