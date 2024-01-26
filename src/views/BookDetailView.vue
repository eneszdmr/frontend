<template>
    <section>
        <div class="container">
            <SectionHeader title="Book Detail" text="we declare long prop we declare long prop we declare long prop" />
            <button>Geri Git</button>
            <div class="row mb-4">
                <div class="col-lg-6">
                    <img class="card-img-top" style="width: 500px;" src="../../iamge1.jpg" />
                </div>
                <div class="col-lg-6 details-wrapper">
                    <p class="lead description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, qui impedit error
                        voluptatum harum quod quisquam fugiat labore. Consequatur, cupiditate? dipisicing elit. Praesentium, qui impedit error
                        voluptatum harum quod quisquam fugiat labore. Consequatur, cupiditate? dipisicing elit. Praesentium, qui impedit error
                        voluptatum harum quod quisquam fugiat labore. Consequatur, cupiditate?</p>
                    <div class="mb-4">
                        <div class="row border-bottom pb-2">
                            <div class="col-lg-6"><strong>Page</strong> </div>
                            <div class="col-lg-6">275</div>
                        </div>
                        <div class="row border-bottom pb-2">
                            <div class="col-lg-6"><strong>Category</strong> </div>
                            <div class="col-lg-6">Action</div>
                        </div>

                        <div class="row border-bottom pb-2">
                            <div class="col-lg-6"><strong>Rating</strong> </div>
                            <div class="col-lg-6">8.5</div>
                        </div>
                        <div class="row border-bottom pb-2">
                            <div class="col-lg-6"><strong>Upload Date</strong> </div>
                            <div class="col-lg-6">19 jan 2002</div>
                        </div>

                    </div>
                    <div class="comments-section">
                        <h3 class="display-6 mb-2">Comments</h3>
                        <div class="card mb-4">
                            <div class="card-body">
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore voluptatem itaque
                                    commodi sapiente ducimus quam atque vitae quo? Necessitatibus accusantium iure nam
                                    ipsam? Accusantium, magnam!</p>
                                <div class="d-flex justify-content-between">
                                    <p class="fw-bold fst-italic"> Emile Zola</p>
                                    <div class="d-flex align-items-center">
                                        <p>Upvote</p>
                                        <p class="ps-2"><strong>8</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card mb-4">
                            <div class="card-body">
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore voluptatem itaque
                                    commodi sapiente ducimus quam atque vitae quo? Necessitatibus accusantium iure nam
                                    ipsam? Accusantium, magnam!</p>
                                <div class="d-flex justify-content-between">
                                    <p class="fw-bold fst-italic"> Emile Zola</p>
                                    <div class="d-flex align-items-center">
                                        <p>Upvote</p>
                                        <p class="ps-2"><strong>8</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card mb-4">
                            <div class="card-body">
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore voluptatem itaque
                                    commodi sapiente ducimus quam atque vitae quo? Necessitatibus accusantium iure nam
                                    ipsam? Accusantium, magnam!</p>
                                <div class="d-flex justify-content-between">
                                    <p class="fw-bold fst-italic"> Emile Zola</p>
                                    <div class="d-flex align-items-center">
                                        <p>Upvote</p>
                                        <p class="ps-2"><strong>8</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card mb-4">
                            <div class="card-body">
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore voluptatem itaque
                                    commodi sapiente ducimus quam atque vitae quo? Necessitatibus accusantium iure nam
                                    ipsam? Accusantium, magnam!</p>
                                <div class="d-flex justify-content-between">
                                    <p class="fw-bold fst-italic"> Emile Zola</p>
                                    <div class="d-flex align-items-center">
                                        <p>Upvote</p>
                                        <p class="ps-2"><strong>8</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card mb-4">
                            <div class="card-body">
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore voluptatem itaque
                                    commodi sapiente ducimus quam atque vitae quo? Necessitatibus accusantium iure nam
                                    ipsam? Accusantium, magnam!</p>
                                <div class="d-flex justify-content-between">
                                    <p class="fw-bold fst-italic"> Emile Zola</p>
                                    <div class="d-flex align-items-center">
                                        <p>Upvote</p>
                                        <p class="ps-2"><strong>8</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import SectionHeader from '@/components/SectionHeader.vue';
import { Button } from 'bootstrap';

export default {
    name: "BookDetailView",
    components: { SectionHeader }
}
</script>

<style scoped>
.details-wrapper{
   max-height: 740px;
   display: flex;
   flex-direction: column;
}

.comments-section{
    flex-grow: 1;
    overflow-y: auto;
}

.description{
    min-height: 150px;
    max-height: 250px;

    overflow-y: auto;
}
</style>