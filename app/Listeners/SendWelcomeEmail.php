<?php

namespace App\Listeners;

use Mail;
use App\Events\UserHasRegistered;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class SendWelcomeEmail
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  UserHasRegistered  $event
     * @return void
     */
    public function handle(UserHasRegistered $event)
    {
        $user = $event->user;
        
        Mail::send('emails.welcome', [
            'title' => '欢迎来到本站!!!',
            'm' => '请点击链接以完成注册:<a href="' . url('/') . '">点我</a>',
            'user' => $user
        ], function ($message) use ($user) {
            $message->to($user->email);
            $message->subject('欢迎注册本站');
        });
    }
}
