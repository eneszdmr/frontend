<template>
    <section>
        <div class="container">
            <SectionHeader :title="this.book.name" :text="book.author" />
            <font-awesome-icon icon="arrow-left" size="2xl" class="mb-2" style="cursor: pointer;" @click="goToBackPage"/>
            <div class="row mb-2">
                <div class="col-lg-6">
                    <img class="card-img-top" style="width: 500px;" :src="book.url" />
                </div>
                <div class="col-lg-6 details-wrapper">
                    <p class="lead description">{{ book.description }}</p>
                    <div class="mb-4">
                        <div class="row border-bottom pb-2">
                            <div class="col-lg-6"><strong>Page</strong> </div>
                            <div class="col-lg-6">{{ book.page }}</div>
                        </div>
                        <div class="row border-bottom pb-2">
                            <div class="col-lg-6"><strong>Category</strong> </div>
                            <div class="col-lg-6">Action</div>
                        </div>

                        <div class="row border-bottom pb-2">
                            <div class="col-lg-6"><strong>Rating</strong> </div>
                            <div class="col-lg-6">{{book.rating}}</div>
                        </div>
                        <div class="row border-bottom pb-2">
                            <div class="col-lg-6"><strong>Upload Date</strong> </div>
                            <div class="col-lg-6">{{ book.uploadDate }}</div>
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
                                        <font-awesome-icon icon="fa-regular fa-thumbs-up" size="xl" />
                                        <p class="ps-2 mb-0"><strong>8</strong></p>
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
                                        <font-awesome-icon icon="fa-regular fa-thumbs-up" size="xl" />
                                        <p class="ps-2 mb-0"><strong>8</strong></p>
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
                                        <font-awesome-icon icon="fa-regular fa-thumbs-up" size="xl" />
                                        <p class="ps-2 mb-0"><strong>8</strong></p>
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
                                        <font-awesome-icon icon="fa-regular fa-thumbs-up" size="xl" />
                                        <p class="ps-2 mb-0"><strong>8</strong></p>
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
                                        <font-awesome-icon icon="fa-regular fa-thumbs-up" size="xl" />
                                        <p class="ps-2 mb-0"><strong>8</strong></p>
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
import books from '@/db';
import { Button } from 'bootstrap';

export default {
    name: "BookDetailView",
    components: {
        SectionHeader
    },
    data() {
        return {
            book: null
        }
    },
    created() {

        const bookId = this.$route.params.id;
        this.book = books.find(item => item.id == parseInt(bookId));
        
    },
    methods:{
        goToBackPage(){
       this.$router.push({name:'books'})
        }
    }
}
</script>

<style scoped>
.details-wrapper {
    max-height: 740px;
    display: flex;
    flex-direction: column;
}

.comments-section {
    flex-grow: 1;
    overflow-y: auto;
}

.description {
    min-height: 150px;
    max-height: 250px;

    overflow-y: auto;
}
</style>