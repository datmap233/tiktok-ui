import Header from '~/layouts/components/Header';

function HeaderOnly({ children }) {
    return (
        <div>
            <Header />
            <div class="container">
                <div class="content">{children}</div>
            </div>
        </div>
    );
}

export default HeaderOnly;
