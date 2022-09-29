import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  listOfPosts: Post[]=[
    new Post(
      'Adobo',
      'http://images.summitmedia-digital.com/yummyph/images/2022/07/22/adobongputirecipe.jpg',
      'Ingredients 1/4 cup canola oil, or any cooking oil 1 kilo pork belly strips, cut into pieces 1 teaspoon salt, more to taste 1/2 teaspoon whole black peppercorns 8 cloves garlic, peeled and smashed slightly but left whole',
      'Isetta',
      new Date
    ),
    new Post(
      'Crispy Sisig',
      'https://api.lifegetsbetter.ph/uploads/recipes/featured/Red-Sisig.jpg',
      'Sisig, the Filipino street food of chopped pig parts and chicken livers tossed with a spicy and sour dressing, is said to have originated in Pampanga, a province centrally located on the island of Luzon in the northern Philippines, although the dish was very different from what is commonly served today',
      'Isetta',
      new Date
    ),
    new Post(
      'Bangus',
      'https://d1uz88p17r663j.cloudfront.net/resized/3d431860aa9bea91b7d693fd05ce6f46_Grilled_Boneless_Bangus_Main_944_531.jpg',
      'Bangus (Chanos chanos) is the national fish of the Philippines, called milkfish in English. Seen as an adaptable, tough, and sturdy fish, the bangus also swims in the Indian Ocean and across the Pacific, living in tropical offshore marine waters around islands and along continental shelves.',
      'Isetta',
      new Date
    ),
    new Post(
      'Bangus',
      'https://d1uz88p17r663j.cloudfront.net/resized/3d431860aa9bea91b7d693fd05ce6f46_Grilled_Boneless_Bangus_Main_944_531.jpg',
      'Bangus (Chanos chanos) is the national fish of the Philippines, called milkfish in English. Seen as an adaptable, tough, and sturdy fish, the bangus also swims in the Indian Ocean and across the Pacific, living in tropical offshore marine waters around islands and along continental shelves.',
      'Isetta',
      new Date
    )
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
