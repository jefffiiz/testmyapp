//
//  Toasty.m
//  myapp
//
//  Created by GinkgoSoft on 21/5/2563 BE.
//
#import "Toasty.h"
#import <React/RCTLog.h>
#import "UIView+Toast.h"
#import "IOSNativeToast.h"


@interface Toasty()

@property (nonatomic, retain) IOSNativeToast *toast;

@end

@implementation Toasty

- (instancetype)init {
    self = [super init];
    if (self) {
        self.toast = [[IOSNativeToast alloc] init];
    }
    return self;
}

+ (BOOL)requiresMainQueueSetup
{
    return YES;
}

- (dispatch_queue_t)methodQueue
{
    return dispatch_get_main_queue();
}
RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(show:(NSString *)message duration:(int *)duration)
{
  [self.toast showToast:message];
}

@end
