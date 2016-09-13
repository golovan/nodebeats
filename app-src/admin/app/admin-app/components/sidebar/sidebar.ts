import {Component, Output, EventEmitter} from '@angular/core';
import {ACCORDION_PROVIDERS} from '../../../shared/components/accordion/accordionItem';
import {SidebarParentMenuModel, SidebarMenuModel} from './sidebar.model';
@Component({
    selector: 'sidebar',
    templateUrl: 'admin-templates/shared/sidebar.html',
    directives: [ACCORDION_PROVIDERS]
})

export class SidebarCmp {
    isActive = false;
    duration:number = 250;
    firstOpen:boolean = true;
    firstDisabled:boolean = false;
    lastOpen:boolean = false;
    private containerSlide:boolean = false;
    @Output() toggleContainerEvent:EventEmitter<any> = new EventEmitter();
    public status:Object = {
        isFirstOpen: false,
        isFirstDisabled: false
    };
    sidebarRoute:SidebarParentMenuModel[] = [];

    constructor() {
        let menuItem:SidebarMenuModel[] = [];
        menuItem.push(new SidebarMenuModel("/admin/dashboard", "Dashboard", "fa-dashboard"));
        menuItem.push(new SidebarMenuModel("/admin/user-management", "User", "fa-user"));
        menuItem.push(new SidebarMenuModel("/admin/blog", "Blog", "fa-newspaper-o"));
        menuItem.push(new SidebarMenuModel("/admin/contact", "Contact List", "fa-list"));
        menuItem.push(new SidebarMenuModel("/admin/email-template", "Email Template", "fa-envelope"));
        menuItem.push(new SidebarMenuModel("/admin/event", "Event Management", "fa-calendar"));
        menuItem.push(new SidebarMenuModel("/admin/errorlog", "Error Log", "fa-stack-overflow"));
        menuItem.push(new SidebarMenuModel("/admin/html", "Html Content", "fa-html5"));
        menuItem.push(new SidebarMenuModel("/admin/imagegallery", "Image Gallery", "fa-picture-o"));
        menuItem.push(new SidebarMenuModel("/admin/imageslider", "Image Slider", "fa-play"));
        menuItem.push(new SidebarMenuModel("/admin/news", "News", "fa-newspaper-o"));
        menuItem.push(new SidebarMenuModel("/admin/partner", "Partners", "fa-link"));
        menuItem.push(new SidebarMenuModel("/admin/team", "Team Management", "fa-users"));
   menuItem.push(new SidebarMenuModel("/admin/testimonial", "Testimonial", "fa-comment-o"));
 menuItem.push(new SidebarMenuModel("/admin/team", "Team Management", "fa-users"));
        this.sidebarRoute.push(new SidebarParentMenuModel(menuItem, null, "", ""));
        menuItem = [];
        menuItem.push(new SidebarMenuModel("/admin/cloudinary", "Cloudinary", "fa-cloud"));
        menuItem.push(new SidebarMenuModel("/admin/comment", "Comments", "fa-commenting-o"));
        menuItem.push(new SidebarMenuModel("/admin/email-service", "Email Service", "fa-cogs"));
        menuItem.push(new SidebarMenuModel("/admin/analytics", "Google Analytics", "fa-line-chart"));
        menuItem.push(new SidebarMenuModel("/admin/googlemap", "Google Map", "fa-map-o"));
        menuItem.push(new SidebarMenuModel("/admin/organization", "Org. Information", "fa-building-o"));
        this.sidebarRoute.push(new SidebarParentMenuModel(menuItem, "Settings", "", "fa-wrench"));

    }

    toggleContainer() {
        this.containerSlide = !this.containerSlide;
        this.toggleContainerEvent.emit(this.containerSlide);
    }

    eventCalled() {
        this.isActive = !this.isActive;
    }
}
