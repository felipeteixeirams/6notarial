function Title(props) {
    return (
        <div class="row justify-content-center">
            <div class="col-md-8 col-lg-6 text-center">
                <div class="section-heading">
                    <h2 class="section-title mb-2 text-white">
                        {props.title}
                    </h2>
                    <p class="mb-5 text-white">
                        {props.description}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Title;