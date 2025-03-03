"use client";

import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  const [session, setSession] = useState<any>(null);
  const [email, setEmail] = useState("");

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
      }
    );

    return () => {
      listener?.subscription.unsubscribe();
    };
  }, []);

  const signInWithMagicLink = async () => {
    if (!email) return alert("Введите email!");

    const { error } = await supabase.auth.signInWithOtp({ email });
    if (error) {
      alert("Ошибка входа: " + error.message);
    } else {
      alert("Проверьте почту! Мы отправили ссылку для входа.");
    }
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    setSession(null);
  };

  return (
    <div className="container mx-auto px-2">{JSON.stringify(session)}</div>
  );
}
